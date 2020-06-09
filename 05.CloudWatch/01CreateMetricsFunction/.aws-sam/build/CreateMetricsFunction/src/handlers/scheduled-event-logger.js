var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});

var cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});

exports.scheduledEventLoggerHandler = async (event, context) => {
  const value = Math.random() * 10
  var params = {
    MetricData: [
      {
        MetricName: 'PAGES_VISITED',
        Dimensions: [
          {
            Name: 'UNIQUE_PAGES',
            Value: 'URLS'
          },
        ],
        Unit: 'None',
        Value: value,
      },
    ],
    Namespace: 'SITE/TRAFFIC'
  };
  
  cw.putMetricData(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("输出信息： ", value);
      console.log("Success", JSON.stringify(data));
    }
  });
}
