# React-Webpack
build a react project using webpack


easy 8 steps to do this process...you don't need to install node modules or anything, all things will be added automatically when follow this steps.


Step1
========================

create an empty folder.

Step2
========================

then open it your favourite IDE and run this command in console

=> npm init

click enter for continue the process.after that you can see package.json file with details about your project.

Step 3
========================

so now you replace your package.json file with following includes except the name.remember the name should not be changed.

package.json -> your package.json

{
  "name": "diamot-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",

....
}


replace above all properties with below properties except the name property(copy and paste except the name)... 

package.json -> configured package.json

{
  "name": "burger-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-router-dom": "^4.2.2"
  },
  "devDependencies": {
    "autoprefixer": "^8.4.1",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "postcss-loader": "^2.1.5",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "rimraf": "^2.6.2",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "webpack": "^4.7.0",
    "webpack-cli": "^2.1.2",
    "webpack-dev-server": "^3.1.4"
  }
}


Step 4
========================

agin open the consol and install all the dependancies of above package.json file. so you can see there are two dependancies such as dependancies and devDependancies for production and developement processes.

so first you can install the 'dependancies' in single npm command as easy method.
for example:

	=> npm install --save babel-plugin-syntax-dynamic-import 		   react react-dom react-router-dom

so you can install many dependancies such as material ui, mdbootstrap everything will be added to this dependancies.

secondly you can install the 'devDependancies' as above aspect.

	=> npm install --save-dev autoprefixer babel-core babel-	  	   loader....

after that setup, your project fulfill with all the dependancies and now you have to use the webpack to start or build your project in next steps.


Step 5
========================

there are two files for configure the webpack such as webpack.config.js and webpack.prod.config.js. the project make the final output as bundle.js files using these webpack files and more optimize when use the webpack.prod.cofig.js.

so you should make two files in your project folder and named, webpack.config.js,webpack.prod.config.js and copy and paste the below code.

webpack.config.js
==================

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};


webpack.prod.config.js
======================

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                     },
                     { 
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins: () => [
                                 autoprefixer({
                                     browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                     ]
                                 })
                             ]
                         }
                      }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};



Step 6
========================

sometime your project has es6 syntax or next generation javascript codes. so the babel is compiler for make that codes as understandable for the browser. so create a file named .babelrc and paste the below code for it.

.bablerc
-----------

{
    "presets": [
        ["env", {
            "targets": {
                "browsers": [
                    "> 1%",
                    "last 2 versions"
                ]
            }
        }],
        "stage-2",
        "react"
    ],
    "plugins": [
        "syntax-dynamic-import"
    ]
}




Step 7
========================

if you have currently creating or finished react project, then you copy the src folder of that project and paste it into your webpack project.


Step 8
========================


so now the folder structure is below.

my-project----- |
			|
			|-----node_modules
			|
			|-----src
			|
			|-----.babelrc
			|
			|-----package.json
			|
			|-----webpack.config.json
			|
			|-----webpack.prod.config.json 



open the console and run the commands as,

	start the project=> npm start

	build the project=> npm build


happy hacking...!