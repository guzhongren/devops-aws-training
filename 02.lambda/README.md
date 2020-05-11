# Lambda

## Ref

https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html

## zip

```shell
yarn zip
```


```shell
# aws iam create-role --role-name lambda-ex --assume-role-policy-document file://trust-policy.json
# aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws lambda create-function --function-name my-function \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x \
--role arn:aws:iam::123456789012:role/lambda-ex
```