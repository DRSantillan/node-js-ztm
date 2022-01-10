import axios from 'axios';
//console.log(axios);

axios
	.get('https://www.atptour.com')
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('Complete Request'));
