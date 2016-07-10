var fs = require('fs');
var resurses = {
	'frontend': [],
	'backend': {
		'main': [],
		'dev': []
	}
};

var frontend = readData('./bower.json').dependencies;
resurses.frontend = createArray(frontend);

var backend = readData('./package.json');
resurses.backend.main = createArray(backend.dependencies);
resurses.backend.dev = createArray(backend.devDependencies);

function readData(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
} 

function createArray(data) {
	var arr = [];
	var count = 1;
	
	for (var key in data) {
		arr.push({
			'id': count++,
			'name': key,
			'version': data[key]
		})
	}
	
	return arr;
}

module.exports = resurses;