'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
              {...register("email",{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <div className="text-warn mb-3">{errors.email.message}</div>
          )}
          <div className={styles.input_group}>
            <label className={styles.label}>Password:</label>
              <input
                type="password"
                {...register("password",{
                  required: "Password is required",
                  minLength: {
                    value : 9,
                    message : "Password must have at least 9 character"
                  }
                })}              
                required
                className={styles.input}
                placeholder="Enter your password"
              />
          </div>
          {errors.password && (
              <div className="text-warn mb-3">{errors.password.message}</div>
          )} 
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : 'Sign In'}
          </Button>
        </form>
        <p className={styles.registerPrompt}>
          Don’t have an account?
          <a href="/signup" className={styles.registerLink}>
            Register here
          </a>  
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
