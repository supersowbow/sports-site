import nodeExternals from 'webpack-node-externals';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const build = path.resolve(__dirname, '..', 'build');
const entry = path.resolve(__dirname, '..', 'src/index.js');

export default {
    target: 'node',
    externals: [nodeExternals()],
    entry,
    output: {
        path: build,
        filename: 'server.bundle.js'
    },
    context: path.resolve(__dirname, '..', '..', 'server'),
    resolve: {
        alias: {
            components: path.resolve(__dirname, '..', 'client/src/components')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin([build], {
            root:  '/server/'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
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