const glob = require("glob")
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                        includePaths: glob.sync(
                            path.join(__dirname, '**/node_modules/@material')
                        ).map((dir) => path.dirname(dir)),
                    }
                }]
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};
