import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import Setting from './svg/Settings.svg';
import Bell from './svg/Bell.svg';
import Basic from './svg/Basic.svg';
import Search from './svg/Search.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)}{...props}>
			<div className={styles.search}>
				<Search />
				Search...
			</div>
			<div className={styles.sidebar_item}>
				<Setting />
			</div>
			<div className={styles.sidebar_item}>
				<Bell />
			</div>
			<div className={styles.line}>
				<Basic />
			</div>
			<div className={styles.profile}>
			</div>
		</div>
	)
}
