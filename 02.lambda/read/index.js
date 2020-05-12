const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});;
var params = {Bucket: 'guzhongren-s3-bucket', Key: 'Avatar.png'};
var file = require('fs').createWriteStream('./Avatar.png');
s3.getObject(params).createReadStream().pipe(file);