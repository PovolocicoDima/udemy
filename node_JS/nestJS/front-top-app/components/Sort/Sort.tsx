import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<div className={styles.sortName} id='sort'>Сортировка</div>
			<button
				id='rating'
				aria-selected={sort == SortEnum.Rating}
				aria-labbledby='sort rating'
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon} />По рейтингу
			</button>
			<button
				id='price'
				aria-selected={sort == SortEnum.Price}
				aria-labbledby='sort price'
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon} />По цене
			</button>
		</div>
	);
};