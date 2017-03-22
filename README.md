# tumblr-theme-loader

[![tests][tests]][tests-url]

Loader for [Webpack 2](https://webpack.js.org) that parses [Tumblr](https://tumblr.com) themes (see [here](https://www.tumblr.com/docs/de/custom_themes) for docs). It uses [`tumblr-theme-parser`](https://github.com/carrot/tumblr-theme-parser) to parse themes.

## Usage

Use the loader on your template HTML, prior to loading it with loaders such as [`html-loader`](https://github.com/webpack-contrib/html-loader). Plug it into your configuration:

```json
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: 'tumblr-theme-loader',
        query: {
          data: tumblrData
        }
      }
    }]
  },

  …
```

Here, `tumblrData` is a JSON object of blog data. For documentation on how to obtain such data, see [`tumblr-theme-parser` documentation](https://github.com/carrot/tumblr-theme-parser#usage).


[tests]: http://img.shields.io/travis/fallafeljan/tumblr-theme-loader.svg
[tests-url]: https://travis-ci.org/fallafeljan/tumblr-theme-loader
