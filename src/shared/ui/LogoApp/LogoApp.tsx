import { Icon } from '../Icon';
import { Text } from '../Text';

import SberLogo from '@/shared/assets/icons/sber-logo.svg';
import { cls } from '@/shared/lib/cls';

import styles from './LogoApp.module.scss';

interface LogoAppProps {
    className?: string;
}

export const LogoApp = (props: LogoAppProps) => {
    const { className } = props;

    return (
        <div className={cls(styles.logoAppWrapper, {}, [className])}>
            <Icon className={styles.logoIcon} Svg={SberLogo} />
            <Text className={styles.logoText}>Бюджет Менеджер</Text>
        </div>
    );
};
