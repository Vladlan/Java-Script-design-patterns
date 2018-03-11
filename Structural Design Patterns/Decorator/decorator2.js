let sum = function(a, b) {
    return a + b;
};

let numCheckDecorator = function(f) {
    return function() {
        for (let i = 0; i<arguments.length; i++) {
            if (typeof arguments[i] !== 'number' || isNaN(arguments[i]) ) {
                throw TypeError('Wrong input. Some of arguments is not a number', 'decorator2.js', 10);
            }
        }
        return f(...arguments);
    }
};

console.log(sum(1,6));

sum = numCheckDecorator(sum);

console.log(sum(1,6));
console.log(sum('1','6'));
