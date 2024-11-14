import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { AppRouteProps } from '../config/routerConfig';

export const renderRouteWithSuspense = (route: AppRouteProps) => {
    const element = (
        <Suspense fallback={route.skeleton}>
            {route.element}
        </Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={element}
        />
    );
};
