const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
        .then(projects => {
            projects.forEach(project => {
                if(project.project_completed === 0){
                    project.project_completed = false
                } else if (project.project_completed === 1) {
                    project.project_completed = true
                } else {
                    project.project_completed = false
                }
            })
            return projects
        })
}

const getById = id => {
    return db('projects').where({project_id: id})
        .then(projects => {
            if(projects[0].project_completed === 0){
                projects[0].project_completed = false
            } else if (projects[0].project_completed === 1) {
                projects[0].project_completed = true
            } else {
                projects[0].project_completed = false
            }
            return projects[0]
        })
}

const create = project => {
    return db('projects').insert(project)
    .then(id => 
      getById(id[0])
        .then(project => project))
}

module.exports = {
    getAll,
    getById,
    create
}