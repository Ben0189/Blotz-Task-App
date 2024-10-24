'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './LoginPage.module.css'; // Import CSS styles
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

const LoginPage = () => {
  const router = useRouter(); // Get the router instance

  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

try {
      const result = await signIn('credentials', {
        redirect: false, // Prevent immediate redirect
        email,
        password,
      });

      if (result?.error) {

        setError('Invalid credentials. Please try again.');
      } else {
        router.push('/task-dayview'); 
      }
    } catch (error) {

      console.error('Login failed:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading after processing
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1 className={styles.title}>User Login</h1>{' '}
        {error && <p className={styles.error}>{error}</p>}
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
          {/* Display error message if any */}
          {/* Loading Spinner or Button */}
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Sign In'}
          </Button>
        </form>
        <p className={styles.registerPrompt}>
          Don’t have an account?
          <a href="/signup" className={styles.registerLink}>
            Register here
          </a>  
          {/* Registration link */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
