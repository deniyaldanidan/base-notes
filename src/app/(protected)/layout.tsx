import React from "react";
import { auth } from "@/lib/auth";
import MySessionProvider from "@/Providers/MySessionProvider";
import { redirect } from "next/navigation";
import myRoutes from "@/utils/myRoutes";
import AuthedHeader from "@/components/AuthedHeader";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect(myRoutes.signIn);
  }
  // console.log(session);
  return (
    <MySessionProvider session={session}>
      <AuthedHeader />
      <main>{children}</main>
    </MySessionProvider>
  );
}
