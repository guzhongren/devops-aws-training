aws lambda invoke \
              --cli-binary-format raw-in-base64-out \
              --function-name  guzhongren-lambda-helloworld\
              --payload '{ "name": "Bob" }' \
              response.json
