express + babel boilerplate
===

express + babel + sequelize web application boilerplate running on Node.js v0.12+.

`grunt build` will transpile all *.es6.js files into *.js with source maps. The generated files are placed at the same place as their ES6 sources.

# Required Node.js Version

Node.js v0.12+

# Prepare Development

    $ npm install -g grunt-cli babel mocha jshint
    $ cd express-babel-boilerplate
    $ npm install

# How to build & debug

    $ grunt build
    $ npm run start

# Server Operations

## Development

    $ grunt serv

## Run in production

    $ NODE_ENV=production npm run start

# How to test & jshint

    $ grunt test

# Troubleshooting

## "Fatal error: Port 35729 is already in use by another process."

For Linux/Unix users,

    $ killall -9 grunt
