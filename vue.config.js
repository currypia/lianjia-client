module.exports = {
  //devServer.proxy适用于本地开发使用，
  //生成环境请用第三方代理软件，如nginx。
  // devServer: {
  //     port: 8080, //本机端口号
  //     host: "localhost", //本机主机名
  //     https: false, //协议
  //     open: true, //启动服务器时自动打开浏览器访问
  //     proxy: {
  //         '/api': {
  //             //目标服务器,代理访问到http://119.23.110.93:8080/v2/api-docs
  //             target: "http://119.23.110.93:8080/",
  //             changOrigin: true, //开启代理
  //             pathRewrite: {
  //                 '^/api': ''
  //             }
  //         }
  //     }
  // }
}