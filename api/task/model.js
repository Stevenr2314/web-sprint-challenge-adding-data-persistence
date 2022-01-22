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
        .then(task => {
            if(task.task_completed > 0){
                task.task_completed = true
                return task
            } else if(task.task_completed === null){
                task.task_completed = false
                return task
            } else {
                return task
            }
        })
        .catch(err => console.log(err)));
}

module.exports = {
    getAll,
    getById,
    create
}