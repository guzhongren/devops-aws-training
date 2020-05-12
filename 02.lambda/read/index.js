const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
exports.handler = async (event) => {
  var params = { Bucket: 'guzhongren-s3-bucket', Key: 'Avatar.png' };
  return s3.getObject(params).createReadStream()
};