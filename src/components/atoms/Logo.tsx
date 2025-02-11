"use client";
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  link: string;
  size: "XSmall" | "Small" | "Medium" | "Large" | "XLarge";
};

const Logo = ({ id, link, size = "Medium" }: LogoProps) => {
  useAOS();
  return (
    <Link
      key={id}
      href={link}
      data-aos="fade-up"
      className={clsx("block group cursor-pointer", {
        "w-32": size === "XSmall",
        "w-44": size === "Small",
        "w-56": size === "Medium",
        "w-60": size === "Large",
        "w-80": size === "XLarge",
      })}
    >
      <Image
        className="block w-full h-auto"
        src="/images/logo.webp"
        width={800}
        height={115}
        alt="ロゴ画像"
      />
    </Link>
  );
};

export default Logo;
