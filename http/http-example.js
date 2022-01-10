// import the module required to access the http library
const http = require('http');

let url = 'https://www.atptour.com/en/players/akira-santillan/sq80/overview';

// #1 using 'http' or 'https' directly
const req = http.request(url, res => {
	//
	res.on('data', chunk => {
		console.log(`Data chunk: ${chunk}`);
	});
	//
	res.on('end', () => {
		console.log('No more data.');
	});
});
// .end() function is required to begin the above request.
req.end();

const { get, request } = require('https');

let urlHttps =
	'https://www.atptour.com/en/players/akira-santillan/sq80/overview';

// #2 using 'request' object directly
const req1 = request(url, res => {
	//
	res.on('data', chunk => {
		console.log(`Data chunk: ${chunk}`);
	});
	//
	res.on('end', () => {
		console.log('No more data.');
	});
});
// .end() function is required to begin the above request.
req1.end();

// #3 using 'get' directly
get(urlHttps, res => {
	//
	res.on('data', chunk => {
		console.log(`Data chunk: ${chunk}`);
	});
	//
	res.on('end', () => {
		console.log('No more data.');
	});
});

// with get no need for req.on as it is called directly.
