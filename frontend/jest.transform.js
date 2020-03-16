const babelOptions = {
  presets: [
    ["@babel/preset-env", { targets: { node: "12" } }],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "@babel/transform-react-jsx",
      {
        pragma: "h"
      }
    ]
  ]
}
module.exports = require("babel-jest").createTransformer(babelOptions)
