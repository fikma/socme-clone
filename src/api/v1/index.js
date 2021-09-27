const router = require('express').Router();

router.get('/', (req, res) => {
	res.send({message: "hello from api v1"});
});

module.exports = router;