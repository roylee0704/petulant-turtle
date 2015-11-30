#React Fundamental Setup

##1.0 Global - One Time Job
```sh
npm install babel webpack webpack-dev-server -g
```

##2.0 Each React Project Setup

###2.1 Library
```sh
$ npm init
$ npm install react react-dom --save-dev
$ npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
```

###2.2 Repo Scalfolding
```sh
$ touch index.html App.js entry.js webpack.config.js
```

##3.0 Configurations

###3.1 `webpack.config.js`

This is the file that going to compile all of our `.js`, `.jsx`, boils down to single `bundle.js` and as well going to launch our development server

```javascripts
//export an object
module.exports = {
  entry: './entry.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  //arguments for devserver
  devServer: {
    inline: true, //watch
    port:3333
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

```
