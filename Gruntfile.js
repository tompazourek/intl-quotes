module.exports = function (grunt) {

  // Initializing the configuration object
  grunt.initConfig({
    // Task configuration
    less: {
      development: {
        options: {
          compress: false, // minifying the result
        },
        files: {
          "./dist/intl-quotes.css": "./src/intl-quotes.less",
        }
      }
    },
    cssmin: {
      css: {
        src: './dist/intl-quotes.css',
        dest: './dist/intl-quotes.min.css'
      }
    },
    watch: {
      less: {
        files: ['./src/*.less'], // watched files
        tasks: ['less', 'cssmin'], // tasks to run
        options: {
          livereload: true // reloads the browser
        }
      }
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definition
  grunt.registerTask('default', ['less', 'cssmin']);

};
