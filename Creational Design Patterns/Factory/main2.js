let Task = require('./task');
let repoFactory = require('./repoFactory');

let task1 = new Task(repoFactory.getRepo('task').get(1));
let task2 = new Task(repoFactory.getRepo('task').get(2));

let user1 = new Task(repoFactory.getRepo('user').get(1));
let project1 = new Task(repoFactory.getRepo('project').get(1));

task1.user = user1;
task1.project = project1;

console.log(task1);
console.log(task2);

task1.save();