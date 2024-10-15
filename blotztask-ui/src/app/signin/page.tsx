'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './LoginPage.module.css'; // Import CSS styles
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const router = useRouter(); // Get the router instance

  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error); // Set error if login fails
    }
     else {
      //TODO : I believe there is a better way to do the callback and redirect url after login
      router.push('/task-dayview');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1 className={styles.title}>User Login</h1>{' '}
        {error && <p className={styles.error}>{error}</p>}{' '}
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
            <Button className='w-full'>
              Sign In
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
