import path from 'path'
import type { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'production',
  target: 'node',
  entry: './src/index.ts',
  output: {
    clean: true,
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    '@nestjs/common': 'commonjs @nestjs/common',
  },
}

export default config
