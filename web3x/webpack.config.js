//Las versiones  de webpack >5.0 no tienen soporte para node
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode:"development",
    plugins: [
        new NodePolyfillPlugin()
    ],
    output: {
        filename: "main.js",
        path: path.join(__dirname, "./dist"), 
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
          },
        port: 9000,
        compress: true,
    },
}