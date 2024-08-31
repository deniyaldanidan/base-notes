"use client";

import myRoutes from "@/utils/myRoutes";
import { signIn } from "next-auth/react";
import { FaGithub as GithubIcon } from "react-icons/fa";

export default function SignInGithubBTN() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: myRoutes.home })}
      className="btn btn-xl btn-flex bg-black text-white"
    >
      <GithubIcon />
      <span>Sign in Using Github</span>
    </button>
  );
}
