import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	//Пагинация через клешню
	poisk: any;
	sortData: any;
	mark: 'available' | 'disabled';
	pages: any;
	ActivePage: any;
	//Настоящий state поиска
	search: number;
}