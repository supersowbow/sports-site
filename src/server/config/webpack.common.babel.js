import Dotenv from 'dotenv-webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const publicDir = path.resolve(__dirname, '..', 'public');
const entryFile = path.resolve(__dirname, '..', 'src/index.js');
const env = path.resolve(__dirname, '..', '..', '..', 'env', '.env');

export default {
    target: 'node',
    externals: [nodeExternals()],
    entry: entryFile,
    output: {
        path: publicDir,
        publicPath: publicDir,
        filename: 'server.bundle.js'
    },
    node: {
        __dirname: false
    },
    context: path.resolve(__dirname, '..', '..', 'server'),
    resolve: {
        alias: {
            components: path.resolve(__dirname, '..', 'client/src/components')
        },
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin([publicDir], {
            root: '/server/'
        }),
        new Dotenv({
            path: env,
            safe: false,
            silent: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader/locals'
            },
            {
                test: /\.(svg|png)$/,
                loader: 'file-loader?emitFile=false'
            }
        ]
    }
}