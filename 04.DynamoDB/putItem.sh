
#/bin/bash

set -eu

source ./varibles.sh

aws dynamodb put-item \
    --table-name $TABLE_NAME \
    --item '{"projectName": {"S": "Learn 1"}, "projectType": {"S": "Study1"}}' \
    --return-consumed-capacity TOTAL



# aws dynamodb batch-write-item --request-items file://request-items.json