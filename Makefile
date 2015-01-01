compile:
	@./node_modules/.bin/coffee --compile --output lib src

test: compile
	@./node_modules/.bin/mocha test

package: test
	npm pack

.PHONY: compile
