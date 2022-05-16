import { EcommerceSearchProps } from './E-commerce_search.props';
import styles from './E-commerce_search.module.css';
import Filter from './svg/Filter.svg';
import React from 'react';

export const EcommerceSearch = ({ searchTable, setValue, value, className, ...props }: EcommerceSearchProps): JSX.Element => {
	return (
		<div className={styles.search}>
			<input className={styles.input} value={value} onChange={searchTable} placeholder='Search product...' />
			<Filter />
		</div>
	)
}