let Task = require('./task');
let taskRepo = require('./taskRepository');
let userRepo = require('./userRepository');
let projectRepo = require('./projectRepository');

let task1 = new Task(taskRepo.get(1));

let user1 = new userRepo.get(1);
let project1 = new projectRepo.get(1);

task1.user = user1;
task1.project = project1;

console.log(task1);
console.log(task2);

task1.save();