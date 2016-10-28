// Variable syntax
let i: number;
i = 1;
i = 'hello';

let s: string;
s = [];
s = i;

let x = '';
x.slice(0, 2);

let b: boolean[]
b.push(true);
b.push(1);

let a: any;
a = 1;
a = '';
a = {
    anything: '!',
};

// Function
function addNumbers(a: number, b: number): number {
    return a + b;
}

addNumbers(1, 2);
addNumbers('', '');

function addManyNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

addManyNumbers(2, 3, null, {});


const result = addManyNumbers(1, 2);

// interface

interface Config {
    isTrue: boolean
    id: number
}

let config: Config;

function doSomething(config: Config): void {
    let id: string = config.id;
}

interface AsyncConfig extends Config {
    isDone: boolean
}

let asyncConfig: AsyncConfig = {
    isTrue: true,
    id: 10,
    isDone: false
}

// type

type ID = number | string;
let id: ID = [];
id = '';
id = 0;

type Config2 = {
    isTrue: boolean
    id: number
}

// Generics

type NumberPromise = Promise<number>;

const np: NumberPromise = Promise.resolve(5);
np.then(result => result.slice(1));


function clone<T>(input: T): T {
    return JSON.parse(JSON.stringify(input));
}

let config3: Config = {
    isTrue: true,
    id: 0,
};

const clonedConfig = clone(config3);
clonedConfig.isTrue = false;

// Third-party libraries
// $ npm install lodash && npm install @types/lodash
// import * as _ from 'lodash'
_.map([1, 2, 3], x => x * x);

// React: see React.tsx

