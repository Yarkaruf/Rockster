import styles from './Loader.module.css';
import { LoaderProps } from './Loader.props';
import React from 'react';


export const Loader = ({ ...props }: LoaderProps): JSX.Element => {
	return (
		<div className={styles.loader}>
			<div className={styles.spinner}></div>
		</div>
	);
};