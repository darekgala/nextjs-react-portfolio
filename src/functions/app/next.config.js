const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: '../next',
  sassLoaderOptions: {
    url: false
  }
});
