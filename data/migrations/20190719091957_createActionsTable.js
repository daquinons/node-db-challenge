exports.up = function(knex) {
  return knex.schema.createTable('Actions', table => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('is_complete').notNullable();
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Actions');
};
