import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	poisk: any;
	sortData: any;
	mark: 'available' | 'disabled';
}