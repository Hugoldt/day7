let i = 0;
let array = [];

function map(elements, modifier) {
    while (i < elements.length) {
        array[array.length] = modifier(elements[i]);
        i += 1;
    }
    return array;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(map([5, 8, 10], isEven));