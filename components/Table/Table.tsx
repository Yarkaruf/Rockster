import styles from './Table.module.css';
import { TableProps } from './Table.props';
import cn from 'classnames';
import React from 'react';
import Filter from './svg/Filter.svg';
import Setting from './svg/Setting.svg';


export const Table = ({ ...props }: TableProps): JSX.Element => {
	const data = [
		{
			id: 1,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 2,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 3,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 4,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 5,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 6,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 7,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 8,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 9,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		},
		{
			id: 10,
			Number: 790841,
			Name: "MacBook Pro 15 Retina Touch Bar MV902",
			Category: "Notebook",
			Price: "2.500",
			Date: "14.08.2020",
			Status: "Available",
		}
	]
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.thead}>
					<td><input type='checkbox' /></td>
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
				{data.map((row) => {
					return (
						<tr className={styles.tbody}>
							<td className={styles.item}><input type='checkbox' /></td>
							<td className={styles.item}>{row.Name}</td>
							<td className={styles.item}>#{row.Number}</td>
							<td className={styles.item}>{row.Category}</td>
							<td className={styles.item}>${row.Price}</td>
							<td className={styles.item}>{row.Date}</td>
							<td className={styles.item}>{row.Status}</td>
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