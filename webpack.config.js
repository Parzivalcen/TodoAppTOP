const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: "web",
  mode: 'development',
  entry: {
    index: './src/index.js',
    addTask: './src/modules/addTask.js',
    addToDo: './src/modules/addToDo.js',
    hero: './src/modules/home.js',
    sideBar: './src/modules/sideBar.js',
    taskPanel: './src/modules/taskPanel.js',
    storage: './src/StoreTask/store.js',
    
  },
  devtool: 'inline-source-map',
  devServer:{
    hot: true,
    static: path.resolve(__dirname, 'dist'),
    
    port: 8080,
    open: true,
  },
  // this made HMR work, praying to it lol
  optimization: {
    runtimeChunk: 'single'
},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Get Things Done',
      favicon: "./src/imgs/climb.png"
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    //  sass
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    ],
  },
};