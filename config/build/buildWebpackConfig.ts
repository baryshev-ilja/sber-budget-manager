import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import type { BuildOptions } from './types/config';

interface WebpackConfiguration extends webpack.Configuration {
    devServer?: undefined | DevServerConfiguration;
}

export function buildWebpackConfig(options: BuildOptions): WebpackConfiguration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
