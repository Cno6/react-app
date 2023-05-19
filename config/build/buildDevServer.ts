import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer({ port, paths }: BuildOptions): DevServerConfiguration {
  return {
    static: paths.build,
    port,
    historyApiFallback: true
  }
}
