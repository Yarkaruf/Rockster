import { GoogleAuthProvider, UserCredential, getAuth, signInWithRedirect } from 'firebase/auth';
import styles from './GoogleButton.module.scss'
import Google from 'public/svg/google-icon.svg';
import firebase_app from '@/firebase/firebaseClient';

export function GoogleButton (){
    const auth = getAuth(firebase_app);

    const signInWithGoogle = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        try {
          const result: UserCredential = await signInWithRedirect(auth, provider);
          // Действия после успешного входа
          console.log(result);
        } catch (error) {
          // Обработка ошибок
          console.error(error);
        }
    };

    return(
        <button className={styles.googleButton} onClick={signInWithGoogle}>
            <Google className={styles.googleIcon} />
            Login with Google
        </button>
    )
}