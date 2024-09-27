"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from './LoginPage.module.css'; // 引入 CSS 文件

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      window.location.href = '/'; // 登录后重定向到主页
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>用户登录</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>电子邮件:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder="请输入您的电子邮件"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>密码:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              placeholder="请输入您的密码"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className='gradient_green_blue_btn gradient_green_blue_btn:hover'>登录</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
