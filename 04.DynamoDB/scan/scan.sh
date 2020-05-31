
#/bin/bash

set -eu

source ../varibles.sh

aws dynamodb scan \
    --table-name $TABLE_NAME \
    --filter-expression "projectName = :projectName" \
    --expression-attribute-values file://expression-attribute-values.json
