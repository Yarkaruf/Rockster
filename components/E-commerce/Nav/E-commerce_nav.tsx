import { EcommerceNavProps } from './E-commerce_nav.props';
import styles from './E-commerce_nav.module.css';
import cn from 'classnames';

export const EcommerceNav = ({ className, stat = "ghost", ...props }: EcommerceNavProps): JSX.Element => {
	return (
		<div className={cn(styles.nav)}
			{...props}
		>
			<li className={cn(styles.primary)}>PRODUCTS</li>
			<li className={cn(styles.ghost)}>ORDERS</li>
			<li className={cn(styles.ghost)}>CUSTOMERS</li>
		</div>
	)
}