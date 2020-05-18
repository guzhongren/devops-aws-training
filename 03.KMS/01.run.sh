# 1. create key

# TODO: output to variable
aws kms create-key \
    --tags TagKey=Purpose,TagValue=Test \
    --description "Development test key"

# 2. encrypt
aws kms encrypt \
# TODO: replase key 0-ie
    --key-id REPLACE \
    --plaintext fileb://./password.md \
    --output text \
    --query CiphertextBlob | base64 \
    --decode > EncryptedFile

# 3. dencrypt

aws kms decrypt \
    --ciphertext-blob fileb://EncryptedFile \
    --output text \
    --query Plaintext | base64 --decode > ExamplePlaintextFile