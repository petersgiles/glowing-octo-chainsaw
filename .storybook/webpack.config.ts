const path = require("path")

module.exports = {
  module: {
    rules: [
      {
        test: [/\.stories\.tsx?$/, /index\.ts$/],
        loaders: [
          {
            loader: require.resolve("@storybook/addon-storysource/loader"),
            options: {
              parser: "typescript"
            }
          }
         
        ],
        include: [path.resolve(__dirname, "../projects")],
        enforce: "pre"
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
