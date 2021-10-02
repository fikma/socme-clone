const router = require('express').Router();

router.get('/', (req, res) => {
	res.send({message: "hello from api v1"});
});

router.post(`/data`, (req, res) => {
	const data = req.body;

	res.send(data);
});

module.exports = router;