const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks').join('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')
        .then(tasks => {
            tasks.forEach(task => {
                if(task.task_completed === 0){
                    task.task_completed = false
                } else if (task.task_completed === 1) {
                    task.task_completed = true
                } else {
                    task.task_completed = false
                }
            })
            return tasks
    })
}

const getById = id => {
    return db('tasks').where({task_id: id})
        .then(tasks => {
            if(tasks[0].task_completed === 0){
                tasks[0].task_completed = false
            } else if (task[0].task_completed === 1) {
                tasks[0].task_completed = true
            } else {
                tasks[0].task_completed = false
            }
            return tasks[0]
        })
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