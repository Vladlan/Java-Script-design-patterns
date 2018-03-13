let Task = require('./task');

let notificationService = function() {
    this.update = function(task) {
        console.log(`Notifying ${task.user} for task ${task.name}`);
    }
};


let mediator = (function() {
    let channels = {};  //=> channels = {complete: [0: {context: not, func: not.update} ] };

    let subscribe = function(channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };

    let publish = function(channel) {
        if (!this.channels[channel]) {
            return false
        }

        let args = Array.prototype.slice.call(arguments, 1); // => [Task {name: name1, user: user1, complete: [Function], ....]

        for (let i = 0; i < mediator.channels[channel].length; i++)
        {
            let sub = mediator.channels[channel][i];  //{context: not, func: not.update}
            sub.func.apply(sub.context, args)
        }
    };

    return {
        channels: channels,
        subscribe: subscribe,
        publish: publish
    };
}());


let task1 = new Task({name: 'name1', user: 'user1'});

let not = new notificationService();

mediator.subscribe('complete', not, not.update);

task1.complete = function() {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};

task1.complete();