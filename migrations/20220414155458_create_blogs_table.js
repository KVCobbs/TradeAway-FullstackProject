/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blogs',(table) => {
    table.increments('blog_id').primary()
    table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
    table.string('content', 500)
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('blogs')
};
