module.exports = {
  options: {
    ignoreEmpty: true,
    noVerify: true,
    noStatus: true
  },
  docs: {
    options: {
      message: 'Update docs for release',
    },
    files: {
      src: ['docs/*']
    }
  },
  build: {
    options: {
      message: 'Update build for release',
    },
    files: {
      src: ['dist/*']
    }
  }
};
