let Task = require('./task');

let notificationService = function() {
    this.update = function(task) {
        console.log(`Notifying ${task.user} for task ${task.name}`);
    }
};




function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push( obj );
};

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observerList.length ) {
        return this.observerList[ index ];
    }
};

ObserverList.prototype.count = function() {
    return this.observerList.length;
};




let ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function( observer ) {
    this.observers.add( observer );
};

ObservableTask.prototype.notify = function( context ) {
    let observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

ObservableTask.prototype.save = function() {
    this.notify(this);
    Task.prototype.save.call(this);
};

let task1 = new ObservableTask({name: 'name1', user: 'user1'});

let not = new notificationService();

task1.addObserver(not.update);

task1.save();