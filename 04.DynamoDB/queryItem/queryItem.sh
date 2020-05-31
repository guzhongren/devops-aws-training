
#/bin/bash

set -eu

source ../varibles.sh

aws dynamodb query \
    --table-name $TABLE_NAME \
    --projection-expression "projectName,projectType,memberName,startDated,sortOf" \
    --key-condition-expression "projectName = :projectName AND projectType = :v1" \
    --expression-attribute-values file://expression-attributes.json
