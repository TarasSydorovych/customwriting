const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer"),
        "url": require.resolve("url"),
        "tls": require.resolve("https-browserify/node_modules/tls"),
        "net": require.resolve("net-browserify")
      };

      return webpackConfig;
    },
  },
};