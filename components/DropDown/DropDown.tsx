import styles from './DropDown.module.css';
import { DropDownProps } from './DropDown.props';
import React from 'react';
import ArrowIcon from './svg/Vector.svg';
import Plus from './svg/Plus.svg'


export const DropDown = ({ children, ...props }: DropDownProps): JSX.Element => {
	return (
		<div className={styles.drop}>
			<ul className={styles.col}>
				{children}
			</ul>
		</div>
	);
};