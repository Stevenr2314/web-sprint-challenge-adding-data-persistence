const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.getAll()
        .then(projects => res.status(200).json(projects))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Projects.getById(req.params.id)
        .then(project => res.status(200).json(project))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(newProject => res.status(201).json(newProject))
        .catch(err => next(err))
})

module.exports = router
