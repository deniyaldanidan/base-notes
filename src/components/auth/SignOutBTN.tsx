"use client";

import { signOut } from "next-auth/react";

export default function SignOutBTN() {
  return (
    <button className="btn btn-xs btn-secondary" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
