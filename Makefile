install:
	npm install

start:
	npm run babel-node -- 'src/bin/brain-games.js'

publish:
	npm publish

link:
	sudo npm run build
	sudo npm link
	npm list -g --depth=0

unlink:
	sudo npm unlink
	npm list -g --depth=0
