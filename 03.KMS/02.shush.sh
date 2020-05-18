echo -n "Enter password: "
ENCRYPTED_PASSWORD=$(shush encrypt alias/app-secrets)



shush decrypt "$ENCRYPTED_PASSWORD"