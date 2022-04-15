// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'project',
      user:     'postgres',
      password: '',
      seeds: {
        directory: './data/seeds'
      }
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false}
    }
  }
};