// //TODO : Will refactor register page later
//'use client';

// import { signIn } from 'next-auth/react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useState } from 'react';
// import styles from './LoginPage.module.css'; // Import CSS styles

// const LoginPage = () => {
//   const router = useRouter(); // Get the router instance
//   const searchParams = useSearchParams(); // Get search parameters
//   const callbackUrl = searchParams.get('callbackUrl') || '/'; // Get callbackUrl; use default if not provided

//   const [email, setEmail] = useState(''); // State for email input
//   const [password, setPassword] = useState(''); // State for password input
//   const [error, setError] = useState(null); // State for error message

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//       callbackUrl, // Pass the callback URL
//     });

//     if (result.error) {
//       setError(result.error); // Set error if login fails
//     } else {
//       router.push(callbackUrl);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.form_container}>
//         <h1 className={styles.title}>User Login</h1>{' '}
//         {/* Title of the login page */}
//         <form onSubmit={handleSubmit}>
//           <div className={styles.input_group}>
//             <label className={styles.label}>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className={styles.input}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className={styles.input_group}>
//             <label className={styles.label}>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className={styles.input}
//               placeholder="Enter your password"
//             />
//           </div>
//           {error && <p className={styles.error}>{error}</p>}{' '}
//           {/* Display error message if any */}
//           <button
//             type="submit"
//             className="gradient_green_blue_btn gradient_green_blue_btn:hover"
//           >
//             Login
//           </button>
//         </form>
//         <p className={styles.registerPrompt}>
//           Don’t have an account?{' '}
//           <a href="/signup" className={styles.registerLink}>
//             Register here
//           </a>{' '}
//           {/* Registration link */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
