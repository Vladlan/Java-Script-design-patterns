let taskHandler = require('./taskHandler');
// let repo = require('./Repo');
// let myrepo = repo();

let myrepo = require('./Repo');

myrepo.save('in main.js');
myrepo.save('in main.js');
myrepo.save('in main.js');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();