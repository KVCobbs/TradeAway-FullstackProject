/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  return knex('blogs').del()
  .then(function () { 
  return knex('blogs').insert([
    {user_id: 1, content: 'this is a test comment'},
    {user_id: 1, content: 'this is also a test comment'},
    ]);
  })
};
