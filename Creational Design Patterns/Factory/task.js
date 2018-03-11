let Repo = require('./taskRepository');

let Task = function(data) {
    this.name = typeof data.name === 'string' ? data.name : data;
    this.completed = false;
};

Task.prototype.complete = function() {
    this.completed = true;
    console.log(`${this.name} completed`);
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
};

module.exports = Task;