/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('users').del()
  .then(function () {
  return knex('users').insert([
    {user_password: "hilol",  user_name: 'ali'},
    {user_password: "hilol",  user_name: 'sally'},
    {user_password: "hilol",  user_name: 'cali'}
    ]);
  })
};
