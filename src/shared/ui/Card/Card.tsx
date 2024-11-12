import { ReactNode } from 'react';

import { cls } from '@/shared/lib/cls';

import styles from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div className={cls(styles.card, {}, [className])}>
            {children}
        </div>
    );
};
