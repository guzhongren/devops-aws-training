
#/bin/bash

# create table
aws dynamodb create-table \
    --table-name Project_guzhongren \
    --attribute-definitions AttributeName=projectName,AttributeType=S AttributeName=projectType,AttributeType=S \
    --key-schema AttributeName=projectName,KeyType=HASH AttributeName=projectType,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5