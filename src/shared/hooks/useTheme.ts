import { useCallback, useContext } from 'react';

import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface UseThemeReturnResult {
    /** theme - Текущая тема приложения */
    theme: Theme;
    /** toggleTheme - Функция, меняющая текущую тему на новую, которую принимает в себя аргументом */
    onToggleTheme: () => void;
}

/**
 * useTheme - Кастомный хук, инкапсулирующий в себе работу с ThemeContext.
 * Возвращает текущую тему и функцию, которая её меняет
 */
export const useTheme = (): UseThemeReturnResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onToggleTheme = useCallback(() => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
    }, [setTheme, theme]);

    return {
        theme: theme || Theme.LIGHT,
        onToggleTheme,
    };
};
