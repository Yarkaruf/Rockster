import { Dispatch, SetStateAction, useEffect, useId, useRef, useState } from 'react';
import styles from './InputPassword.module.scss';
import cn from 'classnames';
import EyePass from 'public/svg/eye-password.svg'
import EyeText from 'public/svg/eye-text.svg'

type Props = {
    label:string;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

export function InputPassword (props:Props){
    const labelId = useId();
    const [isPass, setIsPass] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    useEffect(() => {
        
      }, []);
    
    return(
        <div className={cn(styles.inputContainer,{
            [styles.inputContainer_active]: props.state.length > 0
        })}>
            <input
              className={styles.input}
              type={isPass === true?'password':'text'}
              id={labelId}
              ref={inputRef}
              value={props.state}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.setState(e.target.value)
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                props.setState(e.target.value)
              }}
            />

            <label 
                className={cn(styles.label,{
                    [styles.label_small]: props.state.length > 0
                })} 
                htmlFor={labelId}
                ref={labelRef}
            >
                {props.label}
            </label>
            <div 
            onClick={()=>{
                setIsPass(!isPass)
            }}
            className={styles.password}>
                {isPass?<EyePass />:<EyeText />}
            </div>
        </div>
    )
}