'use client';

import { ClientSafeProvider, getProviders, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function MainNav({}: React.HTMLAttributes<HTMLElement>) {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  // load the registered nextauth providers, in our case is the credential provider
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full pt-4 px-8">
      <Link href="/" className="flex">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/task-dayview"
              className="gradient_green_blue_btn gradient_green_blue_btn:hover"
            >
              <span>Day View</span>
            </Link>
            <Link
              href="/task-list"
              className="gradient_green_blue_btn gradient_green_blue_btn:hover"
            >
              <span>Task List</span>
            </Link>
            <Link
              href="/tasks"
              className="gradient_green_blue_btn gradient_green_blue_btn:hover"
            >
              <span>New Task List</span>
            </Link>
            <Link
              href="/test-connection"
              className="gradient_green_blue_btn gradient_green_blue_btn:hover"
            >
              <span>Test Connection</span>
            </Link>
            <Link
              href="/profile"
              className="gradient_green_blue_btn gradient_green_blue_btn:hover"
            >
              <span>My Profile</span>
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="inverse_gradient_green_blue_btn inverse_gradient_green_blue_btn:hover"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <Link
                  key={provider.id}
                  href="/signin?callbackUrl=%2F"
                  className="gradient_green_blue_btn gradient_green_blue_btn:hover"
                >
                  <span>Sign in</span>
                </Link>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
}
