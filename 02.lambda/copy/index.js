const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({ apiVersion: '2006-03-01' });


// var params = {
//   "Bucket": "guzhongren-s3-bucket-target",
//   "CopySource": "guzhongren-s3-bucket/guzhongren-s3-copy.zip",
//   "Key": "guzhongren-s3-copy.zip"
// }
// s3.copyObject(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// })

exports.handler = async function (event) {
  console.log(JSON.stringify(event))
  const s3Event = event.Records[0].s3;
  var params = {
    "Bucket": "guzhongren-s3-bucket-target",
    "Key": `${s3Event.object.key}`,
    "CopySource": `${s3Event.bucket.name}/${s3Event.object.key}`,
  }
  console.log(JSON.stringify(params))
  await s3.copyObject(params, function (err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)
  }).promise()
 // var params = {
 //   "Bucket": "guzhongren-s3-bucket-target",
 //   "Key": "guzhongren-s3-copy.zip",
 //   "CopySource": "guzhongren-s3-bucket/guzhongren-s3-copy.zip",
 // }
 //  await s3.copyObject(params, function (err, data) {
 //   if (err) console.log(err, err.stack);
 //   else console.log(data);
 // }).promise()
}