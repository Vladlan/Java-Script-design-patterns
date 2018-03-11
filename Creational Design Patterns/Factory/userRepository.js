let repo = function() {

    return {
        get: function(id) {
            console.log('Getting user' + id);
            return {
                name: `new user with id ${id} from db`
            }
        },
        save: function(user) {
            console.log(`${user.name} saved`);
        }
    }
};

module.exports = repo();