# 1. create key
KEY=$(aws kms create-key \
    --tags TagKey=Purpose,TagValue=Test \
    --description "Development test key" \
    --output text \
    --query KeyMetadata.KeyId \
    | awk '{print$0}')

# 2. encrypt
aws kms encrypt \
    --key-id "$KEY"\
    --plaintext fileb://./password.json \
    --output text \
    --query CiphertextBlob | base64 \
    --decode > EncryptedFile

# 3. dencrypt
aws kms decrypt \
    --ciphertext-blob fileb://EncryptedFile \
    --output text \
    --query Plaintext | base64 --decode > ExamplePlaintextFile.json