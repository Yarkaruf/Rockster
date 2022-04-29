import { DetailedHTMLProps, HTMLAttributes, ReactChild } from 'react';

export interface NavItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactChild;
	stat?: "ghost" | "primary";
}