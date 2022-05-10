import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode;
	appearance: 'primary' | 'ghost' | 'white';
	size: 'full' | 'mid' | 'min';
	arrow?: 'right' | 'down' | 'none';
	plus?: 'true' | 'false';
}