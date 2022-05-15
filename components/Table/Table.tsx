import styles from './Table.module.css';
import { TableProps } from './Table.props';
import React from 'react';
import cn from 'classnames';
import Filter from './svg/Filter.svg';
import Setting from './svg/Setting.svg';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Buttons/Buttons';
import { TagP } from '../Ptag/TagP';


export const Table = ({ search, ActivePage, pages, sortData, mark, poisk, ...props }: TableProps): JSX.Element => {
	console.log(search)
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.thead}>
					<td><Checkbox /></td>
					<td onClick={() => { sortData('Name') }}>
						Product Name
						<Filter />
					</td>
					<td onClick={() => { sortData('Number') }}>
						Product No.
						<Filter />
					</td>
					<td onClick={() => { sortData('Category') }}>
						Category
						<Filter />
					</td>
					<td onClick={() => { sortData('Price') }}>
						Price
						<Filter />
					</td>
					<td onClick={() => { sortData('Date') }}>
						Date
						<Filter />
					</td>
					<td onClick={() => { sortData('Status') }}>
						Status
						<Filter />
					</td>
				</tr>
			</thead>
			<tbody>
				{poisk.map((row: any) => {
					return (
						<tr key={row.id} className={styles.tbody}>
							<td className={styles.item}><Checkbox /></td>
							<td className={styles.item}>{row.Name}</td>
							<td className={styles.item}>#{row.Number}</td>
							<td className={styles.item}>{row.Category}</td>
							<td className={styles.item}>${row.Price.toLocaleString()}</td>
							<td className={styles.item}>{row.Date}</td>
							<td className={styles.item}><p className={cn(styles.mark, {
								[styles.available]: row.Status == 'Available',
								[styles.disabled]: row.Status == 'Disabled'
							})}>{row.Status}</p></td>
							<td className={styles.item}><div className={styles.setting}><Setting /></div></td>
						</tr>
					)
				})}
			</tbody>
			<tfoot>
				<tr className={styles.tfoot}>
					<td className={styles.tfoot_item}>
						<Button appearance={'ghost'} size={'mid'} arrow={'down'}>10</Button>
						<TagP>Showing 1 - 10 of {search}</TagP>
					</td>
					<td className={styles.tfoot_item}>
						<Button appearance={'ghost'} size={'min'} arrow={'left'}></Button>
						{
							pages.map(p => {
								return (
									<Button key={p} appearance={'white'} size={'min'} onClick={() => { ActivePage(p) }}>{p}</Button>
								)
							})
						}
						<Button appearance={'ghost'} size={'min'} arrow={'right'}></Button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};
//thead-columns
//tbody-parse
//tfoot-pagination