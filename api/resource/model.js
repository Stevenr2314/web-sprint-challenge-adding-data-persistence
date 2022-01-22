const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const getById = id => {
    return db('resources').where({resource_id: id})
}

const create = resource => {
    return db('resources').insert(resource)
    .then(id => 
      getById(id[0])
        .then(resource => resource)
        .catch(err => console.log(err)));
}

module.exports = {
    getAll,
    getById,
    create
}