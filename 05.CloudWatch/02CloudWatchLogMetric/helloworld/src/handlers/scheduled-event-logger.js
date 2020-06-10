var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});

var cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});

exports.scheduledEventLoggerHandler = async (event, context) => {
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
        Value: Math.random() * 10,
      },
    ],
    Namespace: 'SITE/TRAFFIC'
  };
  
  await cw.putMetricData(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", JSON.stringify(data));
    }
  });
  return params;
}
