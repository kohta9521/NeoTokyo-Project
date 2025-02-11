import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type ListButtonProps = {
  id: string;
  link: string;
  boxBool?: boolean;
  text: string;
};

const ListButton = ({ id, link, boxBool = false, text }: ListButtonProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx(
        "inline-flex items-center justify-center transition-all duration-500 ease-in-out mr-6 group",
        boxBool
          ? // ボックスタイプのボタン（初期状態は枠なし）
            "relative px-5 py-1.5 text-xs text-white rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:transition-all before:duration-500 before:ease-in-out hover:before:border-white hover:before:opacity-100 hover:before:scale-100"
          : // テキストのみのボタン
            "relative text-sm text-white"
      )}
    >
      <p className="transition-colors duration-500 ease-in-out">{text}</p>
      {/* {!boxBool && (
        <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-transparent transition-all duration-500 ease-in-out group-hover:bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></span>
      )} */}
    </Link>
  );
};

export default ListButton;
