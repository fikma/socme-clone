const express = require('express');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
	res.send({message: "Hello world"});
});

app.listen(config.get("app.port"), () => {
	console.log(`app running at port: ${config.get("app.port")}`);
});