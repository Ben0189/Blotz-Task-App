//TODO : Will refactor register page later
// 'use client';

// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import { useState } from 'react';
// import styles from './SignUpPage.module.css'; // Import CSS styles

// const SignUpPage = () => {
//   const router = useRouter(); // Initialize router for navigation
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Call the sign-up API
//     const signUpResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     if (signUpResponse.ok) {
//       // Redirect to the login page after successful sign-up
//       router.push('/signin'); // Use router to navigate to the login page
//     } else {
//       const errorData = await signUpResponse.json();
//       setError(errorData.error || 'An error occurred during sign-up.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.form_container}>
//         <h1 className={styles.title}>Sign Up</h1>
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
//           <div className={styles.input_group}>
//             <label className={styles.label}>Confirm Password:</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className={styles.input}
//               placeholder="Confirm your password"
//             />
//           </div>
//           {error && <p className={styles.error}>{error}</p>}
//           {success && <p className={styles.success}>{success}</p>}
//           <button type="submit" className="gradient_green_blue_btn">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
