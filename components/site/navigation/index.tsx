import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/plura-logo.svg";
type Props = {
  user?: null | User;
};
const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative bg-white border-b border-black">
      <aside className="flex items-center gap-2">
        <Image src={logo} width={40} height={40} alt="" />
        <span className="text-xl font-bold">StarBuild.</span>
      </aside>
      <nav className="hidden mg:block absolute left-[50%] top-[50%] tranform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8"></ul>
      </nav>
    </div>
  );
};

export default Navigation;
