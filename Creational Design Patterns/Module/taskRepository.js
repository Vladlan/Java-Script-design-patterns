let repo = function() {

    return {
        get: function(id) {
            console.log('Getting task' + id);
            return {
                name: `new task id ${id} from db`
            }
        },
        save: function(task) {
            console.log(`${task.name} saved`);
        }
    }
};

module.exports = repo();