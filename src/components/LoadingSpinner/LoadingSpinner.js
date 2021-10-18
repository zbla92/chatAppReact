import React from 'react';
import cn from 'classnames';
import styles from './LoadingSpinner.module.scss';

export default function LoadingSpinner({ variant, loaderSize, className }) {
	return (
		<div className={cn(styles.container, styles[loaderSize], className)}>
			<div className={cn(styles.spinner, styles[variant])} />
		</div>
	);
}

LoadingSpinner.defaultProps = {
	variant: 'silver',
	loaderSize: 'loader_small'
};
