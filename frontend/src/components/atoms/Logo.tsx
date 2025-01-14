import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  link?: string;
  text: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
};

const Logo = ({
  id,
  link = "/",
  text = "NEO TOKYO",
  size = "md",
  color = "primary",
}: LogoProps) => {
  return (
    <Link key={id} href={link}>
      <p
        className={clsx(
          // サイズに応じたクラス
          {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
          },
          // 色に応じたクラス
          {
            "text-[var(--foreground)]": color === "primary",
            "text-gray-500": color === "secondary",
          },
          // 常に適用するクラス
          "font-bold tracking-wide"
        )}
      >
        {text}
      </p>
    </Link>
  );
};

export default Logo;
