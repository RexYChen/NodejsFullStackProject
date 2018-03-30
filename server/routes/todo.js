const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res){
  knex('todo').select().then(todos =>{
    res.render('all', { todos: todos});
  });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', function(req, res){
  const id = req.params.id;
  if(typeof id != 'undefined'){
    knex('todo').select()
    .where('id',id)
    .first()
    .then(todo =>{
      console.log(todo);
      res.render('single', { todo: todo});
    });
  }else{
    es.status(500);
    res.render('error',{
      message:'invalid id'
    });
  }
});

router.get('/:id/edit',(req,res)=>{
  const id = req.params.id;
  if(typeof id != 'undefined'){
    knex('todo').select()
    .where('id',id)
    .first()
    .then(todo =>{
      console.log(todo);
      res.render('edit',todo);
    });
  }else{
    es.status(500);
    res.render('error',{
      message:'invalid id'
    });
  }
});

function vaildTodo(todo)
{
  console.log(typeof todo.title,typeof todo.priority);
  return typeof todo.title == 'string' &&
         todo.title.trim() != '' && typeof todo.priority != 'undefined'
        && !isNaN(Number(todo.priority));
}

router.post('/', (req, res) => {

    console.log(req.body);

    if(vaildTodo(req.body)){
      const todo ={
        title:req.body.title,
        priority: req.body.priority,
        done: req.body.done,
      };
      knex('todo').returning('id').insert(todo).then(ids=>{
        const id1 = ids[0];
        console.log(id1);
        res.redirect('/todo/${id}');
      });
    }else
    {
      res.status(500);
      res.render('error',{
        message:'invalid to do'
      });
    }
     res.render('new');
});

module.exports = router;
