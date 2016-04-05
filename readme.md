[![David](https://img.shields.io/david/mr47/react-redux-kit.svg)]()
[![David](https://img.shields.io/david/dev/mr47/react-redux-kit.svg)]()
[![Travis](https://img.shields.io/travis/mr47/react-redux-kit.svg)]()
[![Code Climate](https://codeclimate.com/github/mr47/react-redux-kit/badges/gpa.svg)](https://codeclimate.com/github/mr47/react-redux-kit)
[![Test Coverage](https://codeclimate.com/github/mr47/react-redux-kit/badges/coverage.svg)](https://codeclimate.com/github/mr47/react-redux-kit/coverage)
[![Twitter Follow](https://img.shields.io/twitter/follow/seekmode.svg?style=social)](https://twitter.com/seekmode)

> Based on [OSKit](https://github.com/mr47/opensource-kit)
<p align="center">
    <img alt="Open source kit" src="https://raw.githubusercontent.com/mr47/opensource-kit/master/tmp/oskit.png" width="546">
</p>

> React + redux demo for people who writes a nice code.

>!Important. There is no actual server side, you can easy change this by implementing server-side by yourself.

##Installation
```sh
git clone https://github.com/mr47/react-redux-kit.git
npm install
npm run start
```

##Whats inside:

 - [Webpack](https://webpack.github.io/) (bundler, with demo external lib)
 - React
 - Redux
 - React-router
 - [Babel](https://babeljs.io) ( stage 0, es2015 ) 
 - [Karma](https://karma-runner.github.io) (Runner for tests)
 - [Mocha](https://mochajsorg/) (tests framework)
 - [Chai](http://chaijs.com/)
 - [Isparta](https://github.com/douglasduteil/isparta) (coverage, es2015 source quality!)
 - Sass (scss)
 - Milligram (css small framework)
 - [ESLint](https://github.com/eslint/eslint)

###Additional:

 - [.editorconfig](http://editorconfig.org/)
 - [.babelrc](https://babeljs.io/docs/usage/babelrc/)

###Demo:

 - [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
 - [Browser sync](https://www.browsersync.io/)

##Test
It will run karma with config `karma.conf.js`
```sh
npm test
```
To run tests in developer mode
```sh
npm run tests:dev
```
##Run Demo
```sh
npm run start
```

##Node and npm version tested
[![npm](https://img.shields.io/npm/v/npm.svg)]() 
[![node](https://img.shields.io/badge/node-%3E%3D5.0.0-green.svg)]() 

## License
MIT

