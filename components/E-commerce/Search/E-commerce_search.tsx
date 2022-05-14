import { EcommerceSearchProps } from './E-commerce_search.props';
import styles from './E-commerce_search.module.css';
import Search from './svg/Search.svg';
import Filter from './svg/Filter.svg';

export const EcommerceSearch = ({ className, ...props }: EcommerceSearchProps): JSX.Element => {
	return (
		<div className={styles.search}>
			<input className={styles.input} placeholder='Search product...' />
			<Filter />
		</div>
	)
}