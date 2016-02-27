var express = require('express');
var router = express.Router();

var tasks = [
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Plan for vacation', isCompleted : true}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
	var viewData = {
		list : tasks
	};
  res.render('tasks/index', viewData);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var taskName = req.body.taskName;
	var newTask = {
		id : tasks.length + 1,
		name : taskName,
		isCompleted : false
	};
	tasks.push(newTask);
	res.redirect('/tasks');
});

module.exports = router;