
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {
          id: 1,
          name: 'Sprint Challenge',
          description:
            'This is the sprint challenge for the Node DB sprint',
          is_complete: false
        },
        {
          id: 2,
          name: 'Go to the gym',
          description:
            'You need to be in shape',
          is_complete: false
        },
        {
          id: 3,
          name: 'Career assignment',
          description:
            'This must be done for Friday',
          is_complete: true
        }
      ]);
    });
};
