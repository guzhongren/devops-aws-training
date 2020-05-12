const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {

  var params = {
    Bucket: "guzhongren-s3-bucket",
    CopySource: "zhangyu-lambda-test/function.zip",
    Key: "function.zip"
  };
  s3.copyObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};