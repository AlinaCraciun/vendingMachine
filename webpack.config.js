const path = require('path');
const HtmlWebpackPlugin = 

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}