'use client';

import { useState } from 'react';
import styles from '../signin/AuthForm.module.css'; // Import CSS styles
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { AlertDestructive } from '@/components/ui/alert-destructive';
import { fetchWithErrorHandling } from '@/services/http-client';
import { BadRequestError } from '@/model/error/bad-request-error';

const SignUpPage = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading spinner

  async function handleRegister(email: string, password: string) {
    setLoading(true);

    try {
      const result = await fetchWithErrorHandling( // Or use the name you've chosen for fetchWithErrorHandling
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log("User registered successfully:", result);

    } catch (error) {
      if (error instanceof BadRequestError) {
        const errorMessages = error.details
          ? Object.values(error.details).flat().join(' ')
          : error.message;
        setError(errorMessages);
        return;
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    const email = "user@example.com"; // Replace with input values
    const password = "password123"; // Replace with input values

    await handleRegister(email, password);
  };
  
  return (
    <div className="h-full justify-center flex flex-col items-center">
      <div className="flex flex-col gap-4 bg-white p-5 rounded-lg shadow-md w-4/12">
        <h1 className={styles.title}>User Sign Up</h1>
        {error &&
          <AlertDestructive 
            title="Error" 
            description={error}
          />
        }
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
