let repo = function() {

    return {
        get: function(id) {
            console.log('Getting project' + id);
            return {
                name: `new project with id ${id} from db`
            }
        },
        save: function(project) {
            console.log(`${project.name} saved`);
        }
    }
};

module.exports = repo();