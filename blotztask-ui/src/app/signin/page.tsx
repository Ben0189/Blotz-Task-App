'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './AuthForm.module.css';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { AlertDestructive } from '@/components/ui/alert-destructive';
import { SubmitHandler, useForm } from 'react-hook-form';

type LoginFormField ={ 
  email: string;
  password: string;
}

const LoginPage = () => {

  const { 
    register, 
    handleSubmit, 
    setError,
    formState : { errors, isSubmitting }  
  } = useForm<LoginFormField>();
  const router = useRouter(); // Get the router instance

  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  // const [error, setError] = useState(null); // State for error message
  // const [loading, setLoading] = useState(false); // State for loading spinner

  // const handleSubmit = async (event) => {
  //   event.preventDefault(); // Prevent default form submission

  //   setLoading(true); // Start loading
  //   setError(null); // Clear any previous errors

  //   try {
  //     const result = await signIn('credentials', {
  //       redirect: false, // Prevent immediate redirect
  //       email,
  //       password,
  //     });

  //     if (result?.error) {
  //       setError('Invalid credentials. Please try again.');
  //     } else {
  //       router.push('/task-dayview'); 
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     setError('An unexpected error occurred. Please try again later.');
  //   } finally {
  //     setLoading(false); // Stop loading after processing
  //   }
  // };

  const onSubmit: SubmitHandler<LoginFormField> = async (formData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email : formData.email,
        password : formData.password,
      });

      if (result?.error) {
        setError("root",{
          message: "Login Failed. Please check you credential"
        });
      } else {
        router.push('/task-dayview'); 
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError("root",{
        message: error
      });
    }
  }

  return (
    <div className="h-full justify-center flex flex-col items-center">
      <div className="flex flex-col gap-4 bg-white p-5 rounded-lg shadow-md w-4/12">
        <h1 className={styles.title}>User Login</h1>
        {/* {error &&
          <AlertDestructive 
            title="Error" 
            description={error}
          />
        } */}
        {errors.root && (
          <AlertDestructive 
            title="Error" 
            description={errors.root.message}
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input_group}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              {...register("email",{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div>{errors.email.message}</div>
            )}
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              {...register("password",{
                required: "Password is required",
                minLength: {
                  value : 9,
                  message : "Password must have at least 9 character"
                }
              })}              
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div>{errors.password.message}</div>
            )}          
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : 'Sign In'}
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
