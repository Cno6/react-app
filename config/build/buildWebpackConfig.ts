import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options
  return {
    mode,
    entry: {
      app: paths.entry // стартовая точка приложения
    },
    output: { // настройка куда и как собирается приложение
      filename: '[name].[contenthash:8].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
