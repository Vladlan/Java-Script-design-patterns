let repo = {
    tasks: {},
    commands: [],
    get: function(id) {
        console.log('Getting task' + id);
        return {
            name: 'new task from db'
        }
    },
    save: function(task) {
        repo.tasks[task.id] = task;
        console.log(`Saving ${task.name} to the db`);
    },
    replay: function() {
        for (let i = 0; i < repo.commands.length; i++) {
            let command = repo.commands[i];

            repo.executeNoLog(command.name, command.obj)
        }
    }
};


repo.execute = function(name) {
    let args = Array.prototype.slice.call(arguments, 1); // => [0: {id: 1, name: 'task1', completed: false}]

    console.log(arguments);

    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if (repo[name]) {
        return repo[name].apply(repo, args)
    }
    return false;
};

repo.executeNoLog = function(name) {
    let args = Array.prototype.slice.call(arguments, 1);

    if (repo[name]) {
        return repo[name].apply(repo, args)
    }
    return false;
};

repo.execute('save', {
    id: 1,
    name: 'task1',
    completed: false
});

repo.execute('save', {
    id: 2,
    name: 'task2',
    completed: false
});

repo.execute('save', {
    id: 3,
    name: 'task3',
    completed: false
});

repo.execute('save', {
    id: 4,
    name: 'task4',
    completed: false
});

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);
