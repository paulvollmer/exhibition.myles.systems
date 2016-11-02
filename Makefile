#
# myles-systems.github.io Makefile
#

all: test

test: lint-js lint-css lint-manifest

lint-js:
	jshint js/myles.js

lint-css:
	csslint css/myles.css

lint-manifest:
	jsonlint -q manifest.json


fmt: fmt-manifest

fmt-manifest:
	jsonlint -p manifest.json > manifest.json.tmp
	rm -f manifest.json
	mv manifest.json.tmp manifest.json


install:
	npm install -g jshint
	npm install -g csslint
	npm install -g jsonlint
