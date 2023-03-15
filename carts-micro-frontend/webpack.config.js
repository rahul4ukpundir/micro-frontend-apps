const htmlWebPackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: "8082",
    },
    plugins: [
        new moduleFederationPlugin({
            name: "carts",
            filename: "remoteEntry.js",
            exposes: {
                './CartsIndex' : './src/bootstrap' },
            shared: ['faker']
        }),
        new htmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
}