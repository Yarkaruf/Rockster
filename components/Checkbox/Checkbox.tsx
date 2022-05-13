import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.props';
import React from 'react';


export const Checkbox = ({ children, ...props }: CheckboxProps): JSX.Element => {
	return (
		<label className={styles.label}>
			<input type='checkbox' className={styles.checkbox} />
			<span className={styles.fake}></span>
			<span className={styles.text}>{children}</span>
		</label>
	);
};