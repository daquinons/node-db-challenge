
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contexts').insert([
        {id: 1, name: 'At home'},
        {id: 2, name: 'At the gym'},
        {id: 3, name: 'In front of the computer'}
      ]);
    });
};
