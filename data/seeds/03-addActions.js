exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Actions').insert([
        {
          id: 1,
          description: 'Create a POST endpoint for Projects',
          notes: 'Be mindful about how you organize your code',
          is_complete: false,
          project_id: 1
        },
        {
          id: 2,
          description: 'Create a POST endpoint for Actions',
          is_complete: false,
          project_id: 1
        },
        {
          id: 3,
          description: 'Do deadlifts',
          is_complete: false,
          project_id: 2
        },
        {
          id: 4,
          description: 'Answer the questions',
          is_complete: true,
          project_id: 3
        }
      ]);
    });
};
