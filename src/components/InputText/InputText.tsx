import { Dispatch, SetStateAction, useId } from 'react';
import styles from './InputText.module.scss';
import cn from 'classnames';

type Props = {
    label:string;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

export function InputText (props:Props){
    const labelId = useId();
    return(
        <div className={cn(styles.inputContainer,{
            [styles.inputContainer_active]: props.state.length > 0
        })}>
            <input
                className={styles.input}
                type='text' 
                id={labelId}
                value={props.state}
                onInput={
                    (e: React.ChangeEvent<HTMLInputElement>)=>{
                        props.setState(e.target.value)
                    }
                }
            />
            <label className={cn(styles.label,{
                [styles.label_small]: props.state.length > 0
            })} htmlFor={labelId}>
                {props.label}
            </label>
        </div>
    )
}