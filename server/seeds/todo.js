
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      // return knex('table_name').insert([
      //   {id: 1, colName: 'rowValue1'},
      //   {id: 2, colName: 'rowValue2'},
      //   {id: 3, colName: 'rowValue3'}
      // ]);
      const todos =[{
        title:'lola',
        priority:1,
        done:true
      },
      {
        title:'Rex',
        priority:2,
        done:false
      },
      {
        title:'Harry',
        priority:3,
        done:false
      }]
      return knex('todo').insert(todos);
    });
};
