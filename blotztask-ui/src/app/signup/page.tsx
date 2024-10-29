'use client';

import { useState } from 'react';
import styles from '../signin/AuthForm.module.css'; // Import CSS styles
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { AlertDestructive } from '@/components/ui/alert-destructive';

const SignUpPage = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      const result = await fetch('')
      console.log("User registered", result)
    } catch (error) {
      console.error('Login failed:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading after processing
    }
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
