module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: "./dist", 
    },
    devServer: {
        contentBase: "./dist",
        port: 9000,
        compress: true,
    },
}