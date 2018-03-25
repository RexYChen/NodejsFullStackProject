const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('todo').select().then(todos =>{

    res.render('all', { todos: todos});
  });
});

router.get('/new', (req, res) => {
    res.render('new');
});

function vaildTodo(todo)
{
  return typeof todo.title == 'string' &&
         todo.title.trim() != '' && typeof todo.priority == 'number';
}
router.post('/', (req, res) => {

    console.log(req.body);

    // if(vaildTodo(req.body)){
    //   const todo{
    //     title:req.body.Title;
    //     priority: req.body.priority;
    //     done: req.body.;
    //   }
    // }else
    // {
    //
    // }
     res.render('new');
});

module.exports = router;
