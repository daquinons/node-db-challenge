exports.up = function(knex) {
  return knex.schema.createTable('ActionsContexts', table => {
    table.increments();
    table
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Actions')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Contexts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ActionsContexts');
};
