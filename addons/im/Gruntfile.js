module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            src: ['static/src/js/*.js'],
            options: {
                sub: true, //[] instead of .
                evil: true, //eval
                laxbreak: true, //unsafe line breaks
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', []);

    grunt.registerTask('default', ['jshint']);

};