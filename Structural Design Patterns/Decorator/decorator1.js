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
};

let task1 = new Task('task1');
task1.complete();
task1.save();

console.log('_________________________________________________');
console.log('');



let task2 = new Task('task2');
task2.notify = function() {
    console.log('notifying smth');
};

task2.save = function() {
    this.notify();
    Task.prototype.save.call(this);
};

task2.complete();
task2.save();

module.exports = Task;