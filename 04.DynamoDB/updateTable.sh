
#/bin/bash

set -eu

source ./varibles.sh

aws dynamodb update-table \
    --table-name $TABLE_NAME \
    --attribute-definitions AttributeName=memberName,AttributeType=S AttributeName=startDate,AttributeType=N \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
