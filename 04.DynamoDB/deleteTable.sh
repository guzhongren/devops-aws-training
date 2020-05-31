
#/bin/bash

set -eu

source ./varibles.sh


# delete
$(aws dynamodb delete-table \
    --table-name $TABLE_NAME \
    --output text \
     2>/dev/null)