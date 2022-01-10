// learning how to create modules and how to export and import using ECMAScrip modules and utilize them
// this is a basic example on how to do this.
// This importation and exportation of modules using import is for Node versions 13.2.0 and higher
// you can either use .mjs extension or you can create a package.json file with attribute of
// "type" and a value of "module"

import { send } from './request.js';
import { read } from './response.js';

const url =
	'https://www.atptour.com/en/players/akira-santillan/sq80/player-stats';
const exampleData = 'Player Stats - ATP Tour';

const getUrl = (url, data) => {
	send(url, data);
	return read();
};

const responseData = getUrl(url, exampleData);
console.log(responseData);


