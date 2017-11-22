install:
	npm install

start:
	npm run babel-node -- 'src/bin/brain-games.js'

start1:
	npm run babel-node -- 'src/bin/brain-even.js'

start2:
	npm run babel-node -- 'src/bin/brain-calc.js'	

build:
	rm -rf dist
	npm run build

publish:
	npm publish

lint:
	npm run eslint src/

link:
	sudo npm run build
	sudo npm link
	npm list -g --depth=0

unlink:
	sudo npm unlink
	npm list -g --depth=0
	sudo rm -rf dist

