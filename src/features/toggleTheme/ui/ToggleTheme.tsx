import { useState } from 'react';

import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/hooks/useTheme';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

interface ToggleThemeProps {
    className?: string;
}

export const ToggleTheme = (props: ToggleThemeProps) => {
    const { className } = props;
    const { theme, onToggleTheme } = useTheme();

    const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

    const onToggleHandler = () => {
        onToggleTheme();
        setCurrentTheme(() => {
            return (currentTheme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
        });
    };

    return (
        <ThemeSwitcher
            className={className}
            onToggleTheme={onToggleHandler}
            currentTheme={currentTheme}
        />
    );
};
