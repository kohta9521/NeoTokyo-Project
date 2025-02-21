"use client";
import React from "react";

// next
import Link from "next/link";

// framer-motion
import { motion } from "framer-motion";

export type HeroImageCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  isActive: boolean;
  onClick: () => void;
};

const HeroImageCard = ({
  image,
  title,
  description,
  link,
  isActive,
  onClick,
}: HeroImageCardProps) => {
  return (
    <motion.div
      className={`relative h-full rounded-lg overflow-hidden border-4 transition-all duration-500 cursor-pointer ${
        isActive ? "w-1/2" : "w-1/6"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      style={{ height: "100%" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {isActive && (
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
          <Link
            href={link}
            className="mt-2 inline-block text-blue-300 underline"
          >
            View More
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default HeroImageCard;
