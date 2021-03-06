var path = require("path");
var webpack = require("webpack");
function resolve(dir) {
	return path.join(__dirname,dir);
}
module.exports = {
	//配置相对路径
	publicPath : "./",
	devServer :{
		host : "0.0.0.0",
		port : 8888,
		proxy : {
			"/apis" : {
				target : "https://cnodejs.org",
				changeOrigin : true,
				pathRewrite : {
					"^/apis" : ""
				}
			}
		}
	},
	chainWebpack : config => {
		//配置别名
		config.resolve.alias.set("@",resolve("src"));
	},
	configureWebpack : {
		plugins : [
			new webpack.ProvidePlugin({
				$ : "jquery",
				jQuery : "jquery"
			})
		]
	}
};