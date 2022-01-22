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
        .then(project => {
            console.log(project)
            if(project.project_completed > 0){
                console.log("project completed read as 1")
                project.project_completed = true
                console.log(project.project_completed)
                return project
            } else {
                console.log('Project.project_completed was 0 or not read at all')
                project.project_completed = false
                console.log(project.project_completed)
                return project
            }
        })
        .catch(err => console.log(err)));
}

module.exports = {
    getAll,
    getById,
    create
}