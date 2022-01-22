const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resources => res.status(200).json(resources))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Resources.getById(req.params.id)
        .then(resource => res.status(200).json(resource))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(newResource => res.status(201).json(newResource))
        .catch(err => next(err))
})

module.exports = router