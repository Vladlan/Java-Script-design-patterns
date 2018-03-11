let repo = function() {
    let called = 0;
    
    let save = function (task) {
        called++;
        console.log(`saved ${task} called ${called} times`);
    };
    return {
        save: save
    }
};
module.exports = repo();