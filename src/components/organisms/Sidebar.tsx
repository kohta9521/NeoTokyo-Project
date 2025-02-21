"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Xアイコンを追加

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className="hidden sm:w-20 sm:h-screen sm:border-r sm:border-[var(--border-gray)] sm:bg-[(--pink)] sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-10 sm:z-50">
        {/* メニュー開閉ボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--blue)] relative z-50"
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>

        {/* 回転したロゴ */}
        <div className="transform -rotate-90 flex-grow flex items-center justify-center w-full">
          <Image
            src="/images/logo.webp"
            width={280}
            height={380}
            alt="logo"
            className="w-screen max-w-none h-auto"
          />
        </div>

        {/* 回転したテキスト */}
        <div className="w-full transform -rotate-90 flex-shrink-0">
          <p className="text-xs font-tiny tracking-widest text-[var(--red)] whitespace-nowrap">
            Create entirely new value.
          </p>
        </div>
      </div>

      {/* スライドインメニュー */}
      <div
        className={`fixed left-0 top-0 h-screen w-[500px] pl-20 bg-black sm:border-r sm:border-[var(--border-gray)] shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 49 }}
      >
        {/* メニューを閉じるボタン（isOpen が true のときのみ表示） */}
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 text-white ${
            isOpen ? "block" : "hidden"
          }`}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* メニュー項目 */}
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-8">Index</h1>
          <ul className="space-y-6 text-3xl font-medium">
            {["About", "Info", "Artworks", "Goods", "Credit", "Comments"].map(
              (item, index) => (
                <li
                  key={index}
                  className="border-b border-white pb-2 flex justify-between items-center"
                >
                  {item}
                  <span className="text-sm">{index + 1}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
