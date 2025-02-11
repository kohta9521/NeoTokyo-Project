"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      // PC (sm 以上) のみ適用
      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh(); // リサイズ時に適用

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      mm.revert(); // モバイル時のリセット
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className="relative h-screen sm:overflow-visible overflow-y-auto"
    >
      <div
        ref={containerRef}
        className="block sm:flex w-max h-screen will-change-transform sm:overflow-visible overflow-x-hidden"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
