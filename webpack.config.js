var path = require("path");
module.exports = {
    entry:["whatwg-fetch", "./react/index.jsx"]
    ,
    output: { filename: "out.js", path: path.resolve(__dirname, "public") },
    mode: "production", 
    watch: false,
    module: {
    rules: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
            ,
            options: {
                presets: [
                "es2015", 
                "stage-2", 
                "react"]
            }
        }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader'
        , 'css-loader' ]
      }]
}
}