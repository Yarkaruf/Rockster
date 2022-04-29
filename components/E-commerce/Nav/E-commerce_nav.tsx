import { EcommerceNavProps } from './E-commerce_nav.props';
import styles from './E-commerce_nav.module.css';

export const EcommerceNav = ({ children, className, ...props }: EcommerceNavProps): JSX.Element => {
	return (
		<div className={styles.nav}>
			{children}
		</div>
	)
}