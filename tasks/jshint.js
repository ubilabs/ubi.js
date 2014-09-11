module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  lib: {
    src: ['lib/**/*.js']
  }
};
