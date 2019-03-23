## Steps to setting up a barebones React app

$ mkdir barebones
$ cd barebones
$ npm init -y
$ npm i react react-dom
$ npm i webpack webpack-cli
$ npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
$ npm i -D nodemon
$ npm i -D eslint babel-eslint eslint-plugin-react

create .eslintrc.js

$ npm i -D jest babel-jest react-test-renderer

$ mkdir dist
$ mkdir src
$ mkdir src/components
$ mkdir src/server

create babel.config.js
create webpack.config.js

add App.js
add Server.js
add Component.js

npm run dev-server
npm run dev-bundle

## Short cut to scaffolding this app
npx reactful appname
