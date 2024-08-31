"use client";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function MySessionProvider({
  session,
  children,
}: {
  session: Session;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
