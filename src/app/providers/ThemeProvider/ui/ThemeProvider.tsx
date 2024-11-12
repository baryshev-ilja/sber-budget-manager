import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_INITED_KEY, LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localeStorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
const themeInited = localStorage.getItem(LOCAL_STORAGE_THEME_INITED_KEY);

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;

    const [isThemeInited, setIsThemeInited] = useState(Boolean(themeInited));
    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
            localStorage.setItem(LOCAL_STORAGE_THEME_INITED_KEY, 'true');
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const themeContextValue = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
