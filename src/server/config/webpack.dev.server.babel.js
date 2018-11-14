import merge from 'webpack-merge';
import common from './webpack.common.babel.js';
import path from 'path';

const build = path.resolve(__dirname, '..', 'build');

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: build
    }
});