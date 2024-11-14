import { memo, ReactElement } from 'react';

import { cls } from '@/shared/lib/cls';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    balance: ReactElement;
    history: ReactElement;
    managements: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        header,
        balance,
        history,
        managements,
    } = props;

    return (
        <div className={cls(styles.mainLayout, {}, [className])}>
            <div className={styles.headerLayout}>{header}</div>
            <div className={`${styles.mainWrapperLayout} container`}>
                <div className={styles.balanceLayout}>{balance}</div>
                <div className={styles.historyLayout}>{history}</div>
                <div className={styles.managementsLayout}>{managements}</div>
            </div>
        </div>
    );
});
