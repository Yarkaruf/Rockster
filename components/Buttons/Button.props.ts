import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode;
	appearance: 'primary' | 'ghost' | 'white' | 'active';
	size: 'full' | 'mid' | 'min';
	arrow?: 'right' | 'down' | 'left' | 'none';
	plus?: 'true' | 'false';
}