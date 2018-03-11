let Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

let TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completed task:' + task.name);
        },
        setCompletedDate: function(task) {
            task.completedDate = new Date();
            console.log(`${task.name} completed on ${task.completedDate}`);
        },
        notifyCompletion: function(task, user) {
            console.log(`Notifying ${user} of the completion of ${task.name}`);
        },
        save: function(task) {
            console.log(`saving task ${task.name}`);
        }
    }
}();


let TaskServiceWrapper = function() {

    let completeAndNotify = function(task) {
        TaskService.complete(task1);
        if (task1.completed === true) {
            TaskService.setCompletedDate(task1);
            TaskService.notifyCompletion(task1, task1.user);
            TaskService.save(task1);
        }
    };
    return {completeAndNotify: completeAndNotify}
}();


let task1Data = {
    name: 'task1',
    priority: 1,
    project: 'Project 1',
    user: 'User 1',
    completed: false
};

let task1 = new Task(task1Data);

TaskServiceWrapper.completeAndNotify(task1);

console.log(task1);

module.exports = Task;