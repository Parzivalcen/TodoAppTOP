const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: "web",
  mode: 'development',
  entry: {
    index: './src/index.js',
    addTask: './src/UI/addTask.js',
    addToDo: './src/UI/addToDo.js',
    hero: './src/UI/home.js',
    storage: './src/StoreTask/store.js',
    
  },
  devtool: 'inline-source-map',
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-do App',
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
    ],
  },
};