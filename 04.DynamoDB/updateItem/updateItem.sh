
#/bin/bash

set -eu

source ../varibles.sh

aws dynamodb update-item \
    --table-name $TABLE_NAME \
    --key file://update-item.json \
    --update-expression "SET #MemberName = :memberName" \
    --expression-attribute-names file://expression-attribute-names.json \
    --expression-attribute-values file://expression-attribute-values.json \
    --return-values ALL_NEW
