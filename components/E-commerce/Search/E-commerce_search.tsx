import { EcommerceSearchProps } from './E-commerce_search.props';
import styles from './E-commerce.module.css';
import cn from 'classnames';
import Search from './svg/Search.svg';
import Filter from './svg/Filter.svg';

export const EcommerceNav = ({ className, ...props }: EcommerceSearchProps): JSX.Element => {
	return (
		<div className={cn(styles.search)}
			{...props}
		>
			<div className={cn(styles.searchLeftGroup)}>
				<Search />
				Search product...
			</div>
			<Filter />
		</div>
	)
}