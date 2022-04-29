import { NavItemProps } from './Nav_item.props';
import styles from './Nav_item.module.css';
import cn from 'classnames';

export const NavItem = ({ children, stat = 'ghost', className, ...props }: NavItemProps): JSX.Element => {
	return (
		<li className={cn(styles.item, {
			[styles.primary]: stat == 'primary',
			[styles.ghost]: stat == 'ghost',
		})}>{children}</li>
	)
}