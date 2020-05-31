
#/bin/bash

set -eu

source ./varibles.sh

# create table
$(aws dynamodb create-table \
    --table-name $TABLE_NAME \
    --attribute-definitions AttributeName=projectName,AttributeType=S AttributeName=projectType,AttributeType=S \
    --key-schema AttributeName=projectName,KeyType=HASH AttributeName=projectType,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --output json 2>/dev/null)