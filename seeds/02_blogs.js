/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  return knex('blogs').del()
  .then(function () { 
  return knex('blogs').insert([
    {users_id: 1, content: 'this is a test comment'},
    {users_id: 1, content: 'this is also a test comment'},
    ]);
  })
};
