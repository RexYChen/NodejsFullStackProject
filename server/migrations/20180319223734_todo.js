
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo',(table)=>
{
  table.increments();
  table.text('title').notNullable();
  table.integer('priority').notNullable();
  table.boolean('done').defaultTo(false).notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};
