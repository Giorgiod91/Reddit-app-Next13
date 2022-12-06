TypeError: Cannot convert undefined or null to object
    at Function.values (<anonymous>)
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div>
      <div className="grid justify-items-center">
        <Image
          className="rounded-full mx-2 object-cover"
          width={300}
          height={300}
          alt="Reddit Logo"
          src={"https://www.redditinc.com/assets/images/site/reddit-logo.png"}
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;