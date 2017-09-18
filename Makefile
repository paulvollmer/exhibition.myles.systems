#
# myles-systems.github.io Makefile
#

all: test

test: lint-html lint-js lint-css lint-json

lint-html:
	./node_modules/.bin/htmlhint index.html
	./node_modules/.bin/htmlhint impressum.html

lint-js:
	./node_modules/.bin/jshint js/myles.js

lint-css:
	./node_modules/.bin/stylelint css/myles.css

lint-json:
	./node_modules/.bin/jsonlint -q manifest.json .stylelintrc

fmt: fmt-manifest

fmt-manifest:
	./node_modules/.bin/jsonlint -p manifest.json > manifest.json.tmp
	rm -f manifest.json
	mv manifest.json.tmp manifest.json

install:
	npm install jshint
	npm install stylelint
	npm install stylelint-config-standard
	./node_modules/.bin/stylelint --version
	npm install jsonlint
	npm install htmlhint
