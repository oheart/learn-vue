## 安装
- npm install webpack -g   --> 全局本地安装webpack
- webpack -h     --> 查看是否安装成功
- npm install webpack --save-dev    --> 本地安装webpack
- npm info webpack     -->  查看 webpack 版本信息
- npm install webpack-dev-server --save-dev    -->  本地安装webpack-dev-server
## 使用
- webpack entry.js bundle.js     -->  编译 entry.js 并打包到 bundle.js
- Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。
## Loader
Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。      
Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。 
1. 安装 loader 
npm install css-loader style-loader
2. 根据模块类型（扩展名）来自动绑定需要的 loader
webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader'
**有些环境下可能需要使用双引号**
webpack entry.js bundle.js --module-bind "css=style-loader!css-loader"
## 配置文件
webpack在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的 webpack.config.js文件，这个文件是一个node.js模块，返回一个json格式的配置信息对象，或者通过 --config 
选项来制定配置文件。
- 创建package.json来添加webpack需要的依赖  
- 创建一个配置文件 webpack.config.js
```js
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}
```
- 运行 webpack
可以看到 webpack 通过配置文件执行的结果和上面通过命令行 webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader' 执行的结果是一样的。
## 插件
插件的使用一般是在webpack的配置信息 plugins 选项中制定。webpack本身内置了一些常见的插件，还可以通过npm安装第三方插件。
修改 webpack.config.js，添加 plugins：      
接下来，我们利用一个最简单的 BannerPlugin 内置插件来实践插件的配置和运行，这个插件的作用是给输出的文件头部添加注释信息。
```js
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]
}

```
## 开发环境
**通过参数让编译的输出内容带有进度和颜色**
1. 使用webpack 
-  webpack --progress --colors    每次修改模块后都重新编译
-  webpack --progress --colors --watch   开启监听模式,避免每次修改模块后都重新编译
2. 使用 webpack-dev-server 开发（推荐）
- 安装  -->  npm install webpack-dev-server -g
- 运行  --> webpack-dev-server --progress --colors
## 故障处理
一般情况下，webpack 如果出问题，会打印一些简单的错误信息，比如模块没有找到。我们还可以通过参数 --display-error-details 来打印错误详情。  
Webpack 的配置提供了 resolve 和 resolveLoader 参数来设置模块解析的处理细节，resolve 用来配置应用层的模块（要被打包的模块）解析，resolveLoader 用来配置 loader 模块的解析。
-  webpack --display-error-details
- webpack配置的 resolve 和 resolveLoader 

注：Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。

## 参考链接
http://zhaoda.net/webpack-handbook/index.html



