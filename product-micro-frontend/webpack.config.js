const htmlWebPackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports ={
    mode: "development",
    devServer: {
        port: "8081"
    },
    plugins:[
      new moduleFederationPlugin({
        name: "products",
        filename: "remoteEntry.js",
        exposes: {
            './ProductIndex': './src/index'
        }

      }),

      new htmlWebPackPlugin({
        template: "./public/index.html"
      })
    ]
}