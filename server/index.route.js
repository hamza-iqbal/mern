const express = require('express');
const basicRoutes = require('./routes/Basic/BasicRoutes');
const router = express.Router(); // eslint-disable-line new-cap

router.get('/test-route', (req, res) =>
  res.send('OK')
);

router.use('/basic', basicRoutes)

//srouter.use('/secondary', secondaryRoutes)


module.exports = router;
