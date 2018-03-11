let Task = function(data) {
    //Only name unique, other props we can share
    this.name = data.name;
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
};

let Flyweight = function(data) {
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

let FlyweightFactory = function() {
    let flyweights = {};

    let get = function(project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = 
                new Flyweight(project + priority + user + completed);
        }
        return flyweights[project + priority + user + completed];
    };
    
    let getCount = function() {
        let count = 0;
        for (let f in flyweights) count++;
        return count;
    };
    
    return {
        get: get,
        getCount: getCount
    }
}();

function TaskCollection() {
    this.tasks = {};
    this.count = 0;
    this.add = function(data) {
        this.tasks[data.name] = new Task(data);
        this.count++;
    };
    this.get = function(name) {
        return this.tasks[name];
    };
    this.getCount = function() {
        return this.count;
    };
}

let tasks = new TaskCollection();

let projects = ['project1', 'project2', 'project3', 'project4'];
let priorities = [1,2,3,4,5];
let users = ['user1', 'user2', 'user3', 'user4'];
let completed = [true, false];

let initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
};

let afterMemory = process.memoryUsage().heapUsed;
console.log(`used memory ${ (afterMemory - initialMemory)  / 1000000} mb`);

console.log(`tasks: ${tasks.getCount()}`);
console.log(`flyweights: ${FlyweightFactory.getCount()}`);




