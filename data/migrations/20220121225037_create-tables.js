/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name')
            .notNullable()
            .unique()
        table.string('resource_description')
    })
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name')
            .notNullable()
        table.string('project_description')
        table.boolean('project_completed')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description')
            .notNullable()
        table.string('task_notes')
        table.boolean('task_completed')
        table.integer('project_id')
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_resources', table => {
        table.integer('project_id')
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('resource_id')
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTable('project_resources')
    .dropTable('tasks')
    .dropTable('projects')
    .dropTable('resources')
};
