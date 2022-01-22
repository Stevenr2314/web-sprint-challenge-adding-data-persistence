const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
}

const getById = id => {
    return db('tasks').where({task_id: id})
}

const create = task => {
    return db('tasks').insert(task)
    .then(id => 
      getById(id[0])
        .then(task => task)
        .catch(err => console.log(err)));
}

module.exports = {
    getAll,
    getById,
    create
}