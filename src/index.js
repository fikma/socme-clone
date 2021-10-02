const express = require('express');
const config = require('config');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', require('./api/index'))

app.listen(config.get("app.port"), () => {
	console.log(`app running at port: ${config.get("app.port")}`);
});