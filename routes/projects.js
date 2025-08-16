const express = require('express');
const router = express.Router();
const DB = require('../data/db.json');



router.get('/random', (req, res) => {

    const randomIndex = Math.floor(Math.random() * DB.projects.length);
    const randomProject = DB.projects[randomIndex];
    res.status(200).json(randomProject);

})

router.get('/', (req, res) => {
    res.status(200).json(DB.projects)
})

router.get('/:id', (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);

    } else {

        var id = parseInt(req.params.id);
        var project = DB.projects.find(p => p.id == id);

        if(project != undefined){
            res.status(200).json(project);

        } else {
            res.sendStatus(404);
        }
    }

})


module.exports = router;