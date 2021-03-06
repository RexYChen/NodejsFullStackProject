// Update with your config settings.

module.exports = {
development: {
    client: 'postgres',
    connection:'postgres://localhost/HuaFu',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
      client: 'postgres',
      connection:process.env.DATABASE_URL+'?ssl=true'
    }

};
