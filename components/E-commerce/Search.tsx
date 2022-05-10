import { SearchProps } from './Search.props';
import styles from './Search.module.css';

export const Search = ({ className, children, ...props }: SearchProps): JSX.Element => {
	return (
		<div className={styles.search}>
			{children}
		</div>
	)
}