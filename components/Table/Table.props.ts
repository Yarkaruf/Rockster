import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	data: any;
	mark: 'available' | 'disabled';
}