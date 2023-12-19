const express = require('express');
const router = express.Router();
const calculator = require('./calculator');

router.post('/', (req, res) => {
  const { sidea, sideb } = req.body;
  const hypotenuse = calculator.calculateHypotenuse(sidea, sideb);
  res.json({ hypotenuse });
});

module.exports = router;
