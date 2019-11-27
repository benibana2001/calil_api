const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ],
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}