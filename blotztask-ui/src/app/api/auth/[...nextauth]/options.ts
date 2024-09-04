import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
        GitHubProvider({
        profile(profile) {
            console.log(profile);
            return{
                ...profile
            }
        },
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "text", placeholder: "your email" },
          password: { label: "Password", type: "password" }
        },
  
        async authorize(credentials: Credentials, req) {
  
          const { email, password } = credentials;
          // console.log(email, password,req);
          
          try {
            //TODO : Remove reject unauthorized set to false 
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

            const response = await fetch(`https://localhost:7112/login/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
            });
        
            if (!response.ok) {
              console.error('Failed to authenticate:', response);
              return null;
            }
        
            const data: LoginApiResponse = await response.json();
            console.log('Response data:', data);
        
            // Check if accessToken is received
            if (data.accessToken) {
        
              // Store the token securely in the session or appropriate storage
              // Example only; replace with actual secure storage solution
              (req as any).session = (req as any).session || {}; // Type assertion to avoid TypeScript errors
              (req as any).session.accessToken = data.accessToken;
        
              return {
                id: email || 'placeholder-id',
                email: email,
                name: null,
                image: null,
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
  
        }
      })
    ],
    callbacks: {
      async jwt({token, user, account, profile,}) {
        console.log("JWT Callback:");
        console.log("token:", token);
        console.log("user:", user);
        console.log("account:", account);
        console.log("profile:", profile);
        return token;
      }
    },
    session: {
      strategy: "jwt"
    },
  
  }