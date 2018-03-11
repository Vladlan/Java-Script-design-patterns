// let repo = require('./Repo');
// let myrepo = repo();

let myrepo = require('./Repo');

let taskHandler = function() {
    return {
        save: function() {
            myrepo.save('in taskHandler.js');
        }
    }
};

module.exports = taskHandler();