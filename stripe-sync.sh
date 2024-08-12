#!/bin/bash

if test -f .env
then
	source .env
else
	echo "Missing environment file: .env ."
	exit
fi
if ! test "$STRIPE_SECRET"
then
	echo "Please set \$STRIPE_SECRET (\"echo STRIPE_SECRET=sk_... > .env\")."
	exit
fi

#read -p "sk_...: " stripesecret
currency=$(grep currency config.toml | cut -d'"' -f2 | tr [:upper:] [:lower:])
publicjson=$(jq -r ".[] | .name,.sku,.price" docs/*/index.json)


rm -rf data
mkdir -p data/product data/price

echo "$publicjson" |\
while read -r name
read -r sku
read -r price
do
	productjson=data/product/"$sku".json
	pricejson=data/price/"$sku".json

	curl https://api.stripe.com/v1/products -u "$STRIPE_SECRET": -d name="$name" > "$productjson"
	productid=$(jq -r ".id" $productjson)
	curl https://api.stripe.com/v1/prices -u "$STRIPE_SECRET": -d product="$productid" -d unit_amount="$price" -d currency="$currency" > "$pricejson"
done
