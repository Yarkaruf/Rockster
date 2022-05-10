import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import React from 'react';
import ArrowIcon from './svg/Vector.svg';
import Plus from './svg/Plus.svg'


export const Button = ({ appearance, children, plus = 'false', className, size = 'min', arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost',
			[styles.min]: size == 'min',
			[styles.mid]: size == 'mid',
			[styles.full]: size == 'full',
			[styles.white]: appearance == 'white'
		})}

			{...props}
		>
			{children}
			{plus != 'false' && appearance != 'ghost' &&
				<span className={cn(styles.plus)}>
					<Plus />
				</span>}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}
		</button >
	);
};