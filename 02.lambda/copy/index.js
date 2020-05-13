const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });;


  // var params = {
  //   "Bucket": "guzhongren-s3-bucket-target",
  //   "CopySource": "guzhongren-s3-bucket/guzhongren-s3-copy.zip",
  //   "Key": "guzhongren-s3-copy.zip"
  // }
  // s3.copyObject(params, function (err, data) {
  //   if (err) console.log(err, err.stack);
  //   else console.log(data);
  // })

exports.handler = async (event) => {
  console.log(JSON.stringify(event))
  const s3Event = event.Records[0].s3;
  var params = {
    Bucket: "guzhongren-s3-bucket-target",
    CopySource: `${s3Event.bucket.name}/${s3Event.object.key}`,
    Key: `${s3Event.object.key}`
  }
  console.log(JSON.stringify(params))
  s3.copyObject(params, function (err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)
  })
  console.log('finish')
}