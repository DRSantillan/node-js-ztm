// learning how to create modules and how to export and import using CommonJS modules and utilize them
// this is a basic example on how to do this.
// This importation and exportation of modules using require is for Node versions below 13.2.0

const { send } = require('./request');
const { read } = require('./response');

const url =
	'https://www.atptour.com/en/players/akira-santillan/sq80/player-stats';
const exampleData = 'Player Stats - ATP Tour';

const getUrl = (url, data) => {
	send(url, data);
	return read();
};

const responseData = getUrl(url, exampleData);
console.log(responseData);
