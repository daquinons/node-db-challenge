
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ActionsContexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ActionsContexts').insert([
        { id: 1, action_id: 1, context_id: 1 },
        { id: 2, action_id: 2, context_id: 1 },
        { id: 3, action_id: 3, context_id: 2 },
        { id: 4, action_id: 4, context_id: 1 },
        { id: 5, action_id: 1, context_id: 3 },
        { id: 6, action_id: 2, context_id: 3 },
        { id: 7, action_id: 4, context_id: 3 }
      ]);
    });
};
