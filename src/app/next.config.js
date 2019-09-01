const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  distDir: '../functions/next',
  sassLoaderOptions: {
    url: false
  }
});
