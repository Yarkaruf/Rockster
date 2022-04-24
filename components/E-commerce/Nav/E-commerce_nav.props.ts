import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EcommerceNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	stat?: "ghost" | "primary";
}