const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const getById = id => {
    return db('projects').where({project_id: id})
}

const create = project => {
    return db('projects').insert(project)
    .then(id => 
      getById(id[0])
        .then(project => project)
        .catch(err => console.log(err)));
}

module.exports = {
    getAll,
    getById,
    create
}