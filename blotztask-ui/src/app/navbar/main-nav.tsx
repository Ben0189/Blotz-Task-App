'use client';

import {
  ClientSafeProvider,
  getProviders,
  signOut,
  useSession,
} from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './main-nav.module.css';
import { H4 } from '@/components/ui/heading-with-anchor';

export function MainNav({}: React.HTMLAttributes<HTMLElement>) {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  // load the registered nextauth providers, in our case is the credential provider
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="w-full py-5 px-8 bg-primary-dark flex justify-between items-center">
      <H4 className="text-white font-display ">Blotz</H4>

      <div className="sm:flex hidden justify-end">
        {session?.user ? (
          <div className="flex gap-6">
            <Link
              href="/task-dayview"
              className={styles['nav-btn']}
            >
              <span className={styles['link-underline']}>Day View</span>
            </Link>
            <Link
              href="/task-list"
              className={styles['nav-btn']}
            >
              <span className={styles['link-underline']}>Task List</span>
            </Link>
            <Link
              href="/tasks"
              className={styles['nav-btn']}
            >
              <span className={styles['link-underline']}>New Task List</span>
            </Link>
            <Link
              href="/test-connection"
              className={styles['nav-btn']}
            >
              <span className={styles['link-underline']}>Test Connection</span>
            </Link>
            <Link
              href="/profile"
              className={styles['nav-btn']}
            >
              <span className={styles['link-underline']}>My Profile</span>
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className={styles['signout-nav-btn']}
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
                  className="nav-btn nav-btn:hover"
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
