'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            sass: {
                files: "app/scss/*.scss",
                tasks: "sass:dev"
            }
        },
        sass: {
            dev: {
                files: {
                    "app/css/styles.css": "app/scss/main.scss"
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "app/css/*.css",
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./app"
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.loadNpmTasks('grunt-browser-sync');

    // Launch BrowserSync + watch task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
