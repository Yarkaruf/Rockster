import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface CheckboxProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	children?: ReactNode;
}