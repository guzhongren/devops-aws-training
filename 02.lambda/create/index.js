const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
exports.handler = async function(event) {
  const promise = new Promise(function(resolve, reject) {
    console.info("Lambda: 开始获取welcome页面")
    https.get(url, (res) => {
        console.info("Lambda: 成功获取")
        resolve(res.statusCode)
      }).on('error', (e) => {
        console.error("Lambda: 获取失败")
        reject(Error(e))
      })
    })
  return promise
}