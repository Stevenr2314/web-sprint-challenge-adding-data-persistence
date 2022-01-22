const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Resources.getById(req.params.id)
        .then(task => res.status(200).json(task))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(newTask => res.status(201).json(newTask))
        .catch(err => next(err))
})

module.exports = router