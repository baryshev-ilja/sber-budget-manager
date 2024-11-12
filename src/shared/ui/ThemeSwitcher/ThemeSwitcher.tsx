import { Icon } from '../Icon';

import DarkThemeIcon from '@/shared/assets/icons/dark-theme-icon.svg';
import LightThemeIcon from '@/shared/assets/icons/light-theme-icon.svg';
import { Theme } from '@/shared/const/theme';
import { cls, Mods } from '@/shared/lib/cls';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    onToggleTheme: () => void;
    currentTheme: Theme;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
        currentTheme,
        onToggleTheme,
    } = props;

    const modsCls: Mods = {
        [styles.darkTheme]: currentTheme === Theme.DARK,
        [styles.lightTheme]: currentTheme === Theme.LIGHT,
    };

    return (
        <button
            className={cls(styles.toggleButton, modsCls, [className])}
            type="button"
            onClick={onToggleTheme}
        >
            <Icon
                className={styles.lightIcon}
                Svg={LightThemeIcon}
                width={20}
                height={20}
            />
            <Icon
                className={styles.darkIcon}
                Svg={DarkThemeIcon}
                width={20}
                height={20}
            />
        </button>
    );
};
