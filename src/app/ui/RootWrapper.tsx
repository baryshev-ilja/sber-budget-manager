import { memo, ReactNode } from 'react';

import { useTheme } from '@/shared/hooks/useTheme';
import { cls } from '@/shared/lib/cls';

interface RootWrapperProps {
    children: ReactNode;
}

export const RootWrapper = memo((props: RootWrapperProps) => {
    const { children } = props;
    const { theme } = useTheme();

    return (
        <div className={cls('app', {}, [theme])}>
            {children}
        </div>
    );
});
