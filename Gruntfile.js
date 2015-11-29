'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  var config = {

    watch: {
      babel: {
        files: ['**/*.es6.js', '!test/**/*.es6.js'],
        tasks: ['babel']
      },
      express: {
        files:  ['**/*.js', '!**/*.es6.js', 'bin/www'],
        tasks:  ['express:dev'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      staticFiles: {
        files: ['public/**/*.css', 'public/**/*.js'],
        options: {
          livereload: true
        }
      }
    },

    express: {
      options: {
        port: 3000,
        debug: true
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      }
    },

    babel: {
      options: {
        plugins: ['uglify:after'],
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: './',
          src: ['**/*.es6.js', '!test/**/*.es6.js'],
          dest: './',
          ext: '.js'
        }]
      }
    },
    
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '**/*.map',
            '**/*.js',
            '!node_modules/**/*',
            '!public/**/*',
            '!**/*.es6.js',
            '!Gruntfile.js',
            './*.tgz'
          ]
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '**/*.es6.js'
      ]
    },
    mochaTest: {
      all: {
        options: {
          require: 'babel/register'
        },
        src: ['test/**/*.es6.js']
      }
    },
  };
    
  grunt.initConfig(config);
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('test', [
    'babel',
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'clean',
    'babel',
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);

  grunt.registerTask('serv', [
    'express:dev',
    'watch'
  ]);
};
