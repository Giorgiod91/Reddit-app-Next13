// @ts-nocheck
"use client";
import { getProviders, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
type Props = {
  // to get the return type of something u need to hover over the function foe exampla getProvider on page.tsx
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
  return (
    <div className="flex justify-center">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              signIn(provider.id)
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;
