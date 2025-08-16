const express = require('express');
const router = express.Router();
const DB = require('../data/db.json');

const baseUrl = process.env.BASE_URL || 'http://localhost:5000';


function addBaseUrlToProjects(projects){
    return projects.map(project => ({
        ...project,
        image_url: `${baseUrl}${project.image_url}`,
    }));
}

router.get('/random', (req, res) => {

    const randomIndex = Math.floor(Math.random() * DB.projects.length);
    const randomProject = DB.projects[randomIndex];

    const projectWithFullImageUrl = {
        ...randomProject,
        image_url: `${baseUrl}${randomProject.image_url}`
    };

    res.status(200).json(projectWithFullImageUrl);

})

router.get('/', (req, res) => {
    const projectWithFullImageUrl = addBaseUrlToProjects(DB.projects);
    res.status(200).json(projectWithFullImageUrl);
})

router.get('/:id', (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);

    } else {

        var id = parseInt(req.params.id);
        var project = DB.projects.find(p => p.id == id);

        if(project != undefined){

            const projectWithFullImageUrl = {
                ...project,
                image_url: `${baseUrl}${project.image_url}`
            };

            res.status(200).json(projectWithFullImageUrl);

        } else {
            res.sendStatus(404);
        }
    }

})


module.exports = router;