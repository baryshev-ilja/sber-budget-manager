import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

import { AppRoutes, AppRoutesPaths } from '@/shared/const/routerConsts';

export type AppRouteProps = RouteProps & {
    skeleton?: ReactNode;
}

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.HOME]: {
        path: AppRoutesPaths.home(),
        element: <div style={{ color: 'white' }}>Home</div>,
        skeleton: <div style={{ color: 'white' }}>Loading...</div>,
    },
    [AppRoutes.ANALYTICS]: {
        path: AppRoutesPaths.analytics(),
        element: <div style={{ color: 'white' }}>Analytics</div>,
        skeleton: <div style={{ color: 'white' }}>Loading...</div>,
    },
};
