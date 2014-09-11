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
  lib: {
    src: ['lib/**/*.js'],
  }
};
