const send = (url, data) => {
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to the ${url}`);
};

const encrypt = data => {
	return 'encrypted data';
};

module.exports = {
    send
}