import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

interface Credentials {
  email: string;
  password: string;
}

interface LoginApiResponse {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'your email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials: Credentials) {
        const { email, password } = credentials;

        try {
          //TODO : Remove reject unauthorized set to false
          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
          }
          //TODO :Also fix the fetch url for login in prod
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/login/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!response.ok) {
            console.error('Failed to authenticate:', response);
            return null;
          }

          const data: LoginApiResponse = await response.json();

          cookies().set('authToken', data.accessToken, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
          });

          if (data.accessToken) {
            return {
              id: email || 'placeholder-id',
              email: email,
              accessToken: data.accessToken, // Include the access token here
              refreshToken: data.refreshToken,
              expiresIn: data.expiresIn,
            };
          } else {
            console.error('Access token not found in response');
            return null;
          }
        } catch (error) {
          console.error('Unhandled error:', error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (user?.access_token) {
        account.access_token = user?.access_token as string;
      }
      if (user?.refresh_token) {
        account.refresh_token = user?.refresh_token as string;
      }

      return true;
    },
    async jwt({ token, session }) {
      console.log('jwt callback', token, session);
      return token;
    },
    async session({ session, token, user }) {
      console.log('session callback', session, token, user);

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};
