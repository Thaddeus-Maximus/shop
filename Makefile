.PHONY: data clean

data:
# checks if index.json already exists (for future use):
# ifeq (, $(wildcard $(wildcard docs/*/index.json)))
# 	hugo
# endif
	rm -rf docs/*
	hugo
	./stripe-sync.sh
	rm -rf docs/*
	hugo

clean: # You will probably want to archive all your products on Stripe if you do this
	rm -rf data
