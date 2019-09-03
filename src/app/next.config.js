const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: '../functions/next',
  sassLoaderOptions: {
    url: false
  }
});
