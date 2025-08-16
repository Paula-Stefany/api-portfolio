const express = require('express');
const router = express.Router();
const DB = require('../data/skills.json');



router.get('/', (req, res) => {
    const skills = DB.skills;
    res.status(200).json(skills);

})

module.exports = router;