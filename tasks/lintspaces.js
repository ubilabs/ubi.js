module.exports = {
  options: {
    newline: true,
    // TODO: Issue with ignore comments.
    // https://github.com/schorfES/grunt-lintspaces/issues/20
    // newlineMaximum: 1,
    ignores: [
      'js-comments'
    ],
    editorconfig: '.editorconfig'
  },
  gruntfile: {
    src: ['Gruntfile.js', 'tasks/{,*/}*.js']
  },
  lib: {
    src: ['lib/**/*.js'],
  },
  test: {
    src: ['test/spec/**/*.js']
  }
};
