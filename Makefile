#
# myles-systems.github.io Makefile
#

all: test

test: lint-html lint-js lint-css lint-manifest

lint-html:
	htmlhint index.html

lint-js:
	jshint js/myles.js

lint-css:
	stylelint css/myles.css

lint-manifest:
	jsonlint -q manifest.json


fmt: fmt-manifest

fmt-manifest:
	jsonlint -p manifest.json > manifest.json.tmp
	rm -f manifest.json
	mv manifest.json.tmp manifest.json


install:
	npm install -g jshint
	npm install -g stylelint
	npm install stylelint-config-standard
	stylelint --version
	npm install -g jsonlint
	npm install -g htmlhint
