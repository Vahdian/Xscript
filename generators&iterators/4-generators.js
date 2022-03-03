/**
 * Generators
 */

 function* generator() {
    yield 1;
    yield 2;
    return 17;
    yield 3;
    yield 5;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
