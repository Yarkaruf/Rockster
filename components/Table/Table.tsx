import styles from './Table.module.css';
import { TableProps } from './Table.props';
import React from 'react';
import cn from 'classnames';
import Filter from './svg/Filter.svg';
import Setting from './svg/Setting.svg';
import { Checkbox } from '../Checkbox/Checkbox';


export const Table = ({ mark, data, ...props }: TableProps): JSX.Element => {
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.thead}>
					<td><Checkbox /></td>
					<td>
						Product Name
						<Filter />
					</td>
					<td>
						Product No.
						<Filter />
					</td>
					<td>
						Category
						<Filter />
					</td>
					<td>
						Price
						<Filter />
					</td>
					<td>
						Date
						<Filter />
					</td>
					<td>
						Status
						<Filter />
					</td>
				</tr>
			</thead>
			<tbody>
				{data.map((row: any) => {
					return (
						<tr key={row.id} className={styles.tbody}>
							<td className={styles.item}><Checkbox /></td>
							<td className={styles.item}>{row.Name}</td>
							<td className={styles.item}>#{row.Number}</td>
							<td className={styles.item}>{row.Category}</td>
							<td className={styles.item}>${row.Price}</td>
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
		</table>
	);
};
//thead-columns
//tbody-parse
//tfoot-pagination