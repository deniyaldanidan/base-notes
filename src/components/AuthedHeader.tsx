"use client";

import SignOutBTN from "@/components/auth/SignOutBTN";
import myRoutes from "@/utils/myRoutes";
import { useSession } from "next-auth/react";
import { FaPlus as PlusIcon } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AuthedHeader() {
  const session = useSession();
  return (
    <header className="px-page-margin-x py-3.5 flex justify-between items-center bg-lightBackground border-b-2 border-b-dimBorder">
      <h1>
        <Link
          href={myRoutes.home}
          className="text-menu-font font-medium flex items-center gap-x-1.5"
        >
          <Image
            src={session.data?.user?.image ?? ""}
            alt={session.data?.user?.name ?? "User"}
            unoptimized
            width={35}
            height={35}
            className="w-[35px] h-[35px] object-cover rounded-full"
          />
          {session.data?.user?.name ?? "User"}&apos;s Notes
        </Link>
      </h1>
      <nav className="flex items-center gap-x-7">
        <Link
          href={myRoutes.addNote}
          className="btn btn-flex btn-xs btn-primary"
        >
          <PlusIcon />
          Add
        </Link>
        <SignOutBTN />
      </nav>
    </header>
  );
}
