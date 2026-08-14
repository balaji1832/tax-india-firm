 "use client";
 
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  type MouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
 
/**
 * ScrollToTopButton
 * ----------------------------------------------------------------------
 * Floating "back to top" control, fixed bottom-right.
 *
 * Interactive details, all smoothed with springs rather than linear CSS
 * transitions, so they feel physical rather than mechanical:
 *
 *  1. Magnetic hover — the button nudges a few px toward the cursor while
 *     it's inside the button's own box, and springs back to center on
 *     mouseleave. Subtle, not a page-wide magnet.
 *  2. Progress ring — scroll progress drives a spring (not the raw scroll
 *     value directly), so the ring eases toward the true position instead
 *     of snapping on every scroll tick.
 *  3. Launch bounce — on click, the arrow springs up and fades, then
 *     re-enters from below and settles, like it "launched" you to the top.
 *  4. Enter/exit of the whole button is a spring, and hover/tap both get
 *     their own quick spring scale for tactile feedback.
 *
 * Same button language as the rest of the site: white circle, navy
 * ring/icon, inverts to solid navy with a white ring/icon on hover/focus.
 *
 * Respects prefers-reduced-motion: disables the magnetic pull, the launch
 * bounce, and switches the scroll-to-top from smooth to instant.
 *
 * Drop in once, near the root of your layout (e.g. app/layout.tsx
 * alongside {children}), so it persists across route changes.
 */
 
const SHOW_AFTER_PX = 480;
const NAVY = "#0A1F3A";
const MAGNET_RANGE = 8; // max px the button drifts toward the cursor
 
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const arrowControls = useAnimationControls();
  const btnRef = useRef<HTMLButtonElement>(null);
 
  // Raw scroll progress → smoothed with a spring for the ring
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });
 
  // Magnetic pull toward the cursor
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springX = useSpring(magnetX, { stiffness: 300, damping: 20 });
  const springY = useSpring(magnetY, { stiffness: 300, damping: 20 });
 
  const size = 48;
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = useTransform(
    smoothProgress,
    (v) => circumference * (1 - v)
  );
 
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
 
    setVisible(scrollTop > SHOW_AFTER_PX);
    rawProgress.set(pct);
  }, [rawProgress]);
 
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
 
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);
 
  const handlePointerMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(dist, rect.width);
    const pull = (clamped / rect.width) * MAGNET_RANGE;
    magnetX.set((dx / dist) * pull);
    magnetY.set((dy / dist) * pull);
  };
 
  const handlePointerLeave = () => {
    magnetX.set(0);
    magnetY.set(0);
  };
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
 
    if (prefersReducedMotion) return;
    arrowControls.start({
      y: [0, -16, 10, 0],
      opacity: [1, 0, 0, 1],
      transition: { duration: 0.55, times: [0, 0.35, 0.4, 1], ease: "easeInOut" },
    });
  };
 
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          ref={btnRef}
          type="button"
          onClick={scrollToTop}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 380, damping: 28 }
          }
          whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
          style={{ x: springX, y: springY }}
          className="
            group fixed z-50
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            md:bottom-8 md:right-8
            flex items-center justify-center
            h-11 w-11 sm:h-12 sm:w-12 md:h-[52px] md:w-[52px]
            rounded-full bg-white
            shadow-[0_8px_24px_-6px_rgba(10,31,58,0.35)]
            transition-colors duration-200 ease-out
            hover:bg-[#0A1F3A]
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-[#0A1F3A]
          "
        >
          {/* Progress ring, spring-smoothed */}
          <svg
            aria-hidden
            viewBox={`0 0 ${size} ${size}`}
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={NAVY}
              strokeOpacity={0.12}
              strokeWidth={2}
            />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={NAVY}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: dashoffset }}
              className="transition-[stroke] duration-150 ease-out group-hover:stroke-white"
            />
          </svg>
 
          {/* Arrow icon, launch-bounces on click */}
          <motion.svg
            aria-hidden
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={NAVY}
            animate={arrowControls}
            className="pointer-events-none relative transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:stroke-white"
          >
            <path
              d="M12 19V5M6 11l6-6 6 6"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
 