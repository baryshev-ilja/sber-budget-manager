import React from 'react';

import { ThemeProvider } from './ThemeProvider';

import { LOCAL_STORAGE_THEME_INITED_KEY } from '@/shared/const/localeStorage';
import { Theme } from '@/shared/const/theme';

const themeInited = localStorage.getItem(LOCAL_STORAGE_THEME_INITED_KEY);

export const AppWithTheme = (Component: React.ComponentType) => {
    return (
        <ThemeProvider initialTheme={!themeInited ? Theme.LIGHT : undefined}>
            <Component />
        </ThemeProvider>
    );
};
