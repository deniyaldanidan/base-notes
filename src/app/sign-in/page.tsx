import SignInGithubBTN from "@/components/auth/SignInGithubBTN";

export default function SignInPage() {
  return (
    <>
      <header className="px-page-margin-x py-4 bg-lightBackground border-b-2 border-b-dimBorder">
        <h1 className="text-center text-logo-font text-secondaryForeground font-semibold">
          BNote
        </h1>
      </header>
      <main className="px-page-margin-x py-11 flex flex-col gap-y-5 items-center">
        <h2 className="text-center text-section-title-font font-semibold uppercase">
          Sign in
        </h2>
        <SignInGithubBTN />
      </main>
    </>
  );
}
