#
# myles-systems.github.io Makefile
#


all: test

test:
	jshint js/myles.js
	csslint css/myles.css

install:
	npm install -g eslint
	npm install -g csslint
