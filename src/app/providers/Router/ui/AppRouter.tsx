import { memo } from 'react';
import { Routes } from 'react-router-dom';

import { routerConfig } from '../config/routerConfig';

import { renderRouteWithSuspense } from './renderRouteWithSuspense';

export const AppRouter = memo(() => {
    return (
        <Routes>
            {Object.values(routerConfig).map(renderRouteWithSuspense)}
        </Routes>
    );
});
