import { DetailedHTMLProps, HTMLAttributes, ReactChild } from 'react';

export interface EcommerceNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactChild;
}