export enum AppRoutes {
    HOME = 'home',
    ANALYTICS = 'analytics',
}

export type AppRouteType = 'home' | 'analytics';

export type Routes = {
    [T in AppRouteType]: () => string;
}

export const AppRoutesPaths: Routes = {
    home: () => '/',
    analytics: () => '/analytics',
};
