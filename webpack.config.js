var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        appStyles: [
            './src/mystyle.css',
        ],
        vendor: [
            '@babel/polyfill',
        ]
    },
    /*entry: [
        '@babel/polyfill',
        './src/index.js',
        './src/mystyle.css',
    ],*/
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            hash:true,
        })
    ]
}