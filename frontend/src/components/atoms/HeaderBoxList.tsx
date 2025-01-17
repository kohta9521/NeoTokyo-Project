import React from "react";

// next
import Link from "next/link";

// props
export type HeaderBoxListProps = {
  id: string;
  link: string;
  text: string;
};

const HeaderBoxList = ({ id, link, text }: HeaderBoxListProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="block w-28 h-12 rounded border-2 border-red-500 text-center"
    >
      <p className="leading-10">{text}</p>
    </Link>
  );
};

export default HeaderBoxList;
