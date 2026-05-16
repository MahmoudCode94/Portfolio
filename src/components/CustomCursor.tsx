import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const trailRefs = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 8 }, () => ({ x: -200, y: -200 })),
  );
  const trailElements = useRef<(HTMLDivElement | null)[]>(Array(8).fill(null));
  const animFrame = useRef<number>(0);
  const rawX = useRef(-200);
  const rawY = useRef(-200);

  const springCfg = { damping: 30, stiffness: 180, mass: 0.6 };
  const springX = useSpring(cursorX, springCfg);
  const springY = useSpring(cursorY, springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.current = e.clientX;
      rawY.current = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest("a, button, [data-cursor]") !== null;
      setHovering(isHoverable);

      const dataText = target.closest("[data-cursor-text]");
      setText(
        dataText ? (dataText.getAttribute("data-cursor-text") ?? "") : "",
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Trail animation loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      trailRefs.current.forEach((pos, i) => {
        const prev =
          i === 0
            ? { x: rawX.current, y: rawY.current }
            : trailRefs.current[i - 1];
        pos.x = lerp(pos.x, prev.x, 0.28 - i * 0.02);
        pos.y = lerp(pos.y, prev.y, 0.28 - i * 0.02);
        const el = trailElements.current[i];
        if (el) {
          const size = 6 - i * 0.55;
          const opacity = (1 - i / 8) * 0.55;
          el.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.opacity = `${opacity}`;
        }
      });
      animFrame.current = requestAnimationFrame(animate);
    };
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(animFrame.current);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ cursor: "none" }}
    >
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailElements.current[i] = el;
          }}
          className="fixed top-0 left-0 rounded-full bg-blue-400"
          style={{ mixBlendMode: "difference", pointerEvents: "none" }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
          borderColor: "rgba(255,255,255,0.6)",
        }}
        animate={{
          width: clicking ? 20 : hovering ? 56 : 36,
          height: clicking ? 20 : hovering ? 56 : 36,
          borderColor: clicking
            ? "rgba(255,255,255,1)"
            : hovering
              ? "rgba(96,165,250,0.9)"
              : "rgba(255,255,255,0.6)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#3b82f6",
          mixBlendMode: "difference",
        }}
        animate={{
          width: clicking ? 6 : hovering ? 0 : 6,
          height: clicking ? 6 : hovering ? 0 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Text label for data-cursor-text */}
      <AnimatePresence>
        {text && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-bold uppercase tracking-widest text-white text-center leading-tight">
              {text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
