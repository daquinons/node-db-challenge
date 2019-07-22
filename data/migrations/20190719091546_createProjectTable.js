exports.up = function(knex) {
  return knex.schema.createTable('Projects', table => {
    table.increments();
    table.string('name', 128).notNullable();
    table.text('description').notNullable();
    table.boolean('is_complete').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Projects');
};
