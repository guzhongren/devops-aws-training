
#/bin/bash

set -eu

source ../varibles.sh

# create table
aws dynamodb create-table \
    --table-name Project_guzhongren1 \
    --attribute-definitions AttributeName=projectName,AttributeType=S AttributeName=projectType,AttributeType=S \
    --key-schema AttributeName=projectName,KeyType=HASH AttributeName=projectType,KeyType=RANGE \
    --global-secondary-indexes file://index.json \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5