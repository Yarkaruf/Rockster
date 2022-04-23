import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from './svg/Logo.svg';
import Chart from './svg/Chart.svg';
import Cart from './svg/Cart.svg';
import Calendar from './svg/Calendar.svg';
import Mail from './svg/Mail.svg';
import Chat from './svg/Chat.svg';
import Tasks from './svg/Tasks.svg';
import Project from './svg/Project.svg';
import Folder from './svg/Folder.svg';
import Text from './svg/Text.svg';
import Contacts from './svg/Contacts.svg';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(className, styles.header)}{...props}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<nav>
				<ul>
					<li className={styles.item}>
						<Chart />
						Dashboard
					</li>
					<li className={styles.item}>
						<Cart />
						E-Commerce
					</li>
					<li className={styles.item}>
						<Calendar />
						Calendar
					</li>
					<li className={styles.item}>
						<Mail />
						Mail
					</li>
					<li className={styles.item}>
						<Chat />
						Chat
					</li>
					<li className={styles.item}>
						<Tasks />
						Tasks
					</li>
					<li className={styles.item}>
						<Project />
						Project
					</li>
					<li className={styles.item}>
						<Folder />
						File Manager
					</li>
					<li className={styles.item}>
						<Text />
						Notes
					</li>
					<li className={styles.item}>
						<Contacts />
						Contacts
					</li>
				</ul>
			</nav>
		</header>
	)
}
