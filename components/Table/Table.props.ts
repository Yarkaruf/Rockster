import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	//Пагинация через клешню
	paginationPage: any;
	sortData: any;
	mark: 'available' | 'disabled';
	pages: any;
	ActivePage: any;
	currentPage: number;
	//Настоящий state поиска
	search: number;
	countRows: number;
}