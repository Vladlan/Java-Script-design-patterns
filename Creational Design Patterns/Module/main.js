let Task = require('./task');
let Repo = require('./taskRepository');

let task1 = new Task(Repo.get(1));
let task2 = new Task('task2');
let task3 = new Task('task3');
let task4 = new Task('task4');

task1.complete();
task2.save();
task3.save();
task4.save();
