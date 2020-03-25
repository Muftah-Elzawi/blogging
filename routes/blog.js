const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'thanks': 'thanks', time: Date().toString() })
})

module.exports = router