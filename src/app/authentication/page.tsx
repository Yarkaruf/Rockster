"use client"
import Pattern from 'public/svg/background/loginPattern.svg';
import styles from './authentication.module.scss';
import { InputText } from '@/components/InputText/InputText';
import { useState } from 'react';
import { InputPassword } from '@/components/InputPassword/InputPassword';
import { GoogleButton } from '@/components/GoogleButton/GoogleButton';


export default function AuthenticationPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <main className={styles.main}>
      <figure className={styles.pattern}>
        <Pattern />
      </figure>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1>Login To Your Account</h1>
          <GoogleButton />
          <div className={styles.divider}>
            <hr></hr>
            <span>Or Login with email</span>
            <hr></hr>
          </div>
          <div className={styles.inputContainer}>
            <InputText label={'E-mail'} state={mail} setState={setMail}/>
            <InputPassword label={'Password'} state={password} setState={setPassword}/>
          </div>
        </form>
      </div>
    </main>
  )
}