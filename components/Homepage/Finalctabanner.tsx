"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

/* =========================================================
   SHADERS
========================================================= */

const vertexShader = `
precision highp float;

void main() {
  gl_Position =
    projectionMatrix *
    modelViewMatrix *
    vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;

uniform vec2 iMouse;
uniform float bendInfluence;

uniform vec3 colorStart;
uniform vec3 colorMid;
uniform vec3 colorEnd;

mat2 rotate(float r) {
  return mat2(
    cos(r),
    sin(r),
    -sin(r),
    cos(r)
  );
}

vec3 getGradient(float t) {
  if (t < 0.5) {
    return mix(
      colorStart,
      colorMid,
      t * 2.0
    );
  }

  return mix(
    colorMid,
    colorEnd,
    (t - 0.5) * 2.0
  );
}

float wave(
  vec2 uv,
  float offset,
  float amplitude,
  float speed,
  vec2 mouseUv
) {
  float time =
    iTime * speed;

  float y =
    sin(
      uv.x * 1.1 +
      offset +
      time
    ) * amplitude;

  y +=
    sin(
      uv.x * 0.46 -
      time * 0.5 +
      offset * 1.1
    ) * 0.055;

  vec2 d =
    uv - mouseUv;

  float influence =
    exp(
      -dot(d, d) * 4.0
    );

  y +=
    (
      mouseUv.y -
      uv.y
    ) *
    influence *
    -0.12 *
    bendInfluence;

  float dist =
    abs(
      uv.y - y
    );

  float core =
    1.0 -
    smoothstep(
      0.007,
      0.019,
      dist
    );

  float glow =
    1.0 -
    smoothstep(
      0.015,
      0.095,
      dist
    );

  return
    core * 0.95 +
    glow * 0.15;
}

void mainImage(
  out vec4 fragColor,
  in vec2 fragCoord
) {
  vec2 uv =
    (
      2.0 * fragCoord -
      iResolution.xy
    ) /
    iResolution.y;

  uv.y *= -1.0;

  vec2 mouseUv =
    (
      2.0 * iMouse -
      iResolution.xy
    ) /
    iResolution.y;

  mouseUv.y *= -1.0;

  vec3 col =
    vec3(0.0);

  float totalIntensity =
    0.0;

  /* =====================================================
     MAIN FLOW
     top-left -> center -> bottom-right
  ===================================================== */

  for (
    int i = 0;
    i < 8;
    i++
  ) {
    float fi =
      float(i);

    float t =
      fi / 7.0;

    vec2 p =
      uv;

    p =
      p *
      rotate(-0.24);

    p.y +=
      0.02;

    float line =
      wave(
        p,
        fi * 0.145,
        0.25,
        0.15,
        mouseUv
      );

    vec3 c =
      getGradient(t);

    float strength =
      0.42;

    col +=
      c *
      line *
      strength;

    totalIntensity +=
      line *
      strength;
  }

  /* =====================================================
     SECOND FLOW
     from upper-right
  ===================================================== */

  for (
    int i = 0;
    i < 5;
    i++
  ) {
    float fi =
      float(i);

    float t =
      fi / 4.0;

    vec2 p =
      uv;

    p =
      p *
      rotate(0.72);

    p.x -=
      1.15;

    p.y -=
      0.18;

    float line =
      wave(
        p,
        fi * 0.19 + 1.0,
        0.20,
        -0.09,
        mouseUv
      );

    vec3 c =
      mix(
        colorMid,
        colorEnd,
        t
      );

    col +=
      c *
      line *
      0.11;

    totalIntensity +=
      line *
      0.11;
  }

  /* =====================================================
     BOTTOM FLOW
  ===================================================== */

  for (
    int i = 0;
    i < 5;
    i++
  ) {
    float fi =
      float(i);

    float t =
      fi / 4.0;

    vec2 p =
      uv;

    p =
      p *
      rotate(-0.62);

    p.x +=
      0.78;

    p.y -=
      0.92;

    float line =
      wave(
        p,
        fi * 0.18 + 2.0,
        0.18,
        0.08,
        mouseUv
      );

    vec3 c =
      mix(
        colorStart,
        colorMid,
        t
      );

    col +=
      c *
      line *
      0.085;

    totalIntensity +=
      line *
      0.085;
  }

  /* =====================================================
     FAINT BACKGROUND STRANDS
  ===================================================== */

  for (
    int i = 0;
    i < 4;
    i++
  ) {
    float fi =
      float(i);

    vec2 p =
      uv;

    p =
      p *
      rotate(-0.38);

    p.y +=
      0.85;

    p.x -=
      0.3;

    float line =
      wave(
        p,
        fi * 0.22 + 2.8,
        0.15,
        0.06,
        mouseUv
      );

    col +=
      colorEnd *
      line *
      0.04;

    totalIntensity +=
      line *
      0.04;
  }

  /* =====================================================
     SOFT CENTER READABILITY
     no white shape — only opacity reduction
  ===================================================== */

  vec2 textZone =
    uv;

  textZone.x /=
    1.05;

  textZone.y /=
    0.50;

  float centerDist =
    length(textZone);

  float textProtection =
    smoothstep(
      0.12,
      0.82,
      centerDist
    );

  float centerStrength =
    mix(
      0.55,
      1.0,
      textProtection
    );

  col *=
    centerStrength;

  totalIntensity *=
    centerStrength;

  /* =====================================================
     EDGE FADE
  ===================================================== */

  float edge =
    1.0 -
    smoothstep(
      1.7,
      2.35,
      length(uv)
    );

  col *=
    edge;

  totalIntensity *=
    edge;

  /* =====================================================
     FINAL OPACITY
  ===================================================== */

  float alpha =
    clamp(
      totalIntensity * 0.78,
      0.0,
      0.68
    );

  fragColor =
    vec4(
      col,
      alpha
    );
}

void main() {
  vec4 color =
    vec4(0.0);

  mainImage(
    color,
    gl_FragCoord.xy
  );

  gl_FragColor =
    color;
}
`;

/* =========================================================
   HELPERS
========================================================= */

function hexToVec3(hex: string) {
  const value =
    hex.replace("#", "");

  return new Vector3(
    parseInt(
      value.slice(0, 2),
      16
    ) / 255,

    parseInt(
      value.slice(2, 4),
      16
    ) / 255,

    parseInt(
      value.slice(4, 6),
      16
    ) / 255
  );
}

/* =========================================================
   CONTENT ANIMATION
========================================================= */

const contentContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const rise: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter:
      "blur(5px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter:
      "blur(0px)",

    transition: {
      duration: 0.7,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function FinalCtaBanner() {
  const canvasRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const prefersReducedMotion =
    useReducedMotion();

  useEffect(() => {
    const container =
      canvasRef.current;

    if (!container) return;

    let active =
      true;

    /* =====================================================
       SCENE
    ===================================================== */

    const scene =
      new Scene();

    const camera =
      new OrthographicCamera(
        -1,
        1,
        1,
        -1,
        0,
        1
      );

    camera.position.z =
      1;

    const renderer =
      new WebGLRenderer({
        antialias: true,
        alpha: true,
      });

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio ||
          1,
        2
      )
    );

    renderer.setClearColor(
      0xffffff,
      0
    );

    renderer.domElement.style.width =
      "100%";

    renderer.domElement.style.height =
      "100%";

    renderer.domElement.style.display =
      "block";

    container.appendChild(
      renderer.domElement
    );

    /* =====================================================
       BLUE GRADIENT COLORS
    ===================================================== */

    const uniforms = {
      iTime: {
        value: 0,
      },

      iResolution: {
        value:
          new Vector3(
            1,
            1,
            1
          ),
      },

      iMouse: {
        value:
          new Vector2(
            -1000,
            -1000
          ),
      },

      bendInfluence: {
        value: 0,
      },

      colorStart: {
        value:
          hexToVec3(
            "#3B82F6"
          ),
      },

      colorMid: {
        value:
          hexToVec3(
            "#2563EB"
          ),
      },

      colorEnd: {
        value:
          hexToVec3(
            "#93C5FD"
          ),
      },
    };

    const material =
      new ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,

        transparent: true,

        depthWrite: false,
        depthTest: false,
      });

    const geometry =
      new PlaneGeometry(
        2,
        2
      );

    const mesh =
      new Mesh(
        geometry,
        material
      );

    scene.add(
      mesh
    );

    const clock =
      new Clock();

    /* =====================================================
       RESIZE
    ===================================================== */

    const resize =
      () => {
        if (!active) {
          return;
        }

        const width =
          container.clientWidth ||
          1;

        const height =
          container.clientHeight ||
          1;

        renderer.setSize(
          width,
          height,
          false
        );

        uniforms.iResolution.value.set(
          renderer.domElement.width,
          renderer.domElement.height,
          1
        );
      };

    resize();

    const resizeObserver =
      new ResizeObserver(
        resize
      );

    resizeObserver.observe(
      container
    );

    /* =====================================================
       POINTER INTERACTION
    ===================================================== */

    const targetMouse =
      new Vector2(
        -1000,
        -1000
      );

    const currentMouse =
      new Vector2(
        -1000,
        -1000
      );

    let targetInfluence =
      0;

    let currentInfluence =
      0;

    const damping =
      0.05;

    const handlePointerMove =
      (
        event: PointerEvent
      ) => {
        const rect =
          container.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left;

        const y =
          event.clientY -
          rect.top;

        const dpr =
          renderer.getPixelRatio();

        targetMouse.set(
          x * dpr,
          (
            rect.height -
            y
          ) * dpr
        );

        targetInfluence =
          1;
      };

    const handlePointerLeave =
      () => {
        targetInfluence =
          0;
      };

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    container.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    /* =====================================================
       ANIMATION
    ===================================================== */

    let raf =
      0;

    const animate =
      () => {
        if (!active) {
          return;
        }

        uniforms.iTime.value =
          prefersReducedMotion
            ? 0
            : clock.getElapsedTime();

        currentMouse.lerp(
          targetMouse,
          damping
        );

        uniforms.iMouse.value.copy(
          currentMouse
        );

        currentInfluence +=
          (
            targetInfluence -
            currentInfluence
          ) * damping;

        uniforms.bendInfluence.value =
          currentInfluence;

        renderer.render(
          scene,
          camera
        );

        raf =
          requestAnimationFrame(
            animate
          );
      };

    animate();

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      active =
        false;

      cancelAnimationFrame(
        raf
      );

      resizeObserver.disconnect();

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      geometry.dispose();

      material.dispose();

      renderer.dispose();

      renderer.forceContextLoss();

      if (
        renderer.domElement
          .parentElement
      ) {
        renderer.domElement
          .parentElement
          .removeChild(
            renderer.domElement
          );
      }
    };
  }, [
    prefersReducedMotion,
  ]);

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="
        relative
        isolate
        flex
        min-h-[560px]
        w-full
        items-center
        overflow-hidden
        px-6
        py-24
        text-center

        sm:min-h-[600px]
        sm:py-28

        lg:min-h-[620px]
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            #FFFFFF 0%,
            #FCFDFF 55%,
            #F7FAFF 100%
          )
        `,
      }}
    >
      {/* =================================================
          BLUE GRADIENT FLOWING LINES
      ================================================= */}

      <div
        ref={canvasRef}
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <motion.div
        variants={
          contentContainer
        }
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
        "
      >
        {/* Heading */}

        <motion.h2
          id="final-cta-heading"
          variants={rise}
          className="
            max-w-[760px]
            tracking-[-0.04em]
          "
          style={{
            fontFamily:
              "var(--font-display, ui-serif, Georgia, serif)",

            fontSize:
              "clamp(2.2rem, 5vw, 4.05rem)",

            lineHeight:
              1.04,

            fontWeight:
              500,

            color:
              "#102A43",
          }}
        >
          Ready to Register,
          File or{" "}

          <span
            className="italic"
            style={{
              color:
                "#2563EB",
            }}
          >
            Stay Compliant?
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          variants={rise}
          className="
            mt-6
            max-w-xl
            leading-[1.75]
          "
          style={{
            fontFamily:
              "var(--font-body, ui-sans-serif, system-ui, sans-serif)",

            fontSize:
              "clamp(0.95rem, 1.4vw, 1.075rem)",

            color:
              "#5D7185",
          }}
        >
          Speak with a Chartered Accountant today,
          no cost, no commitment. Just clear answers
          about your business.
        </motion.p>

        {/* CTA */}

        <motion.div
          variants={rise}
          className="mt-9"
        >
          <Link
            href="/contact-us"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3

              rounded-full

              border
              border-[#D6E3EF]

              bg-white/90

              px-7
              py-3.5

              font-semibold
              text-[#15324B]

              shadow-[0_12px_34px_-16px_rgba(37,99,235,0.28)]

              backdrop-blur-sm

              transition-all
              duration-300
              ease-out

              hover:-translate-y-0.5
              hover:border-[#2563EB]
              hover:bg-[#2563EB]
              hover:text-white

              active:translate-y-0

              sm:px-8
              sm:py-4
            "
            style={{
              fontFamily:
                "var(--font-body, ui-sans-serif, system-ui, sans-serif)",

              fontSize:
                "0.9375rem",
            }}
          >
            Talk to a CA About Your Business

            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Info */}

        <motion.div
          variants={rise}
          className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-1
            text-xs
            sm:text-sm
          "
          style={{
            fontFamily:
              "var(--font-body, ui-sans-serif, system-ui, sans-serif)",

            color:
              "#8293A5",
          }}
        >
          <span>
            Monday to Saturday
          </span>

          <span
            aria-hidden="true"
            className="
              hidden
              text-[#C7D3DE]
              sm:inline
            "
          >
            |
          </span>

          <span>
            10:00 AM – 9:00 PM
          </span>

          <span
            aria-hidden="true"
            className="
              hidden
              text-[#C7D3DE]
              sm:inline
            "
          >
            |
          </span>

          <span>
            Chennai, Tamil Nadu
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}