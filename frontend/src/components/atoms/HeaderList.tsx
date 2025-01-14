import React from "react";

// next
import Link from "next/link";

// props
export type HeaderListProps = {
  id: string;
  link: string;
  text: string;
};

const HeaderList = ({ id, link, text }: HeaderListProps) => {
  return (
    <Link key={id} href={link} className="mr-8">
      <p className="text-lg">{text}</p>
    </Link>
  );
};

export default HeaderList;
