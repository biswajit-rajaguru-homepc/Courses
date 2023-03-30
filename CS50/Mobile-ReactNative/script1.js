/*

1. semicolons are optional
2. "string" 'string' are same
*/

const val = 40
const ar = [
    'hello',
    "helloo",
    1,
    function () {
        console.log("hello")
    },
    true,
]

//ar[3]()

//for (let i = 0; i < ar.length;i++) console.log(ar[i])

/*const x = 42
const y = String(x)
const z = x.toString()
const w = x + " "

console.log(typeof(x),typeof(y),typeof(z),typeof(w))
*/

// falsy 0 NAN false "" undefined null
// {} [] and everything else

// undefined null, number string boolean symbol are primitive types, everything else is an object

/* primitives are immutable,
This means when we change the value of a variable which holds a number, then the memory location is freed, and a new memoey location with the new value is created
Objects are stored by reference. that is the objects point a an address of memory, where the dat is stored.

*/

//console.log(typeof ar) // typeof is an operator like !x -x;

/*const o = new Object() // generic way to create a new instance of a class
o.hello = 'Namaskaram'
o.method = function () { console.log('Hello') }

console.log(o)

const oo = {
    first: 'Biswajit',
    second: 'Rajaguru',
    'third': 'Nambiar',
}

console.log(oo)*/

/*

difference between how primitive and objects are handled by 
= operator.

let o = {
    a: 'a',
    b: 'b',
}

let o1 = o

o.a = 'aa'

console.log(o1.a, o.a)

let a = 3
let b = a
a = 4
console.log(a,b) 
*/

/*
const o1 = { a: 1, b: { c: 1 } }
const o2 = Object.assign({}, o1) // shallow clone; the primitive values are unlinked,
// but if the value is a reference, then the reference is copied, craeting shallow clones

o1.a = 2
o1.b.c = 2
//console.log(o1.a, o2.a, '\n', o1.b.c, o2.b.c)
console.log('o1: ',o1,'\no2:',o2)
//to create deep copies

const o3 = JSON.parse(JSON.stringify(o1))
o1.a = 3
o1.b.c = 3
//console.log('\n Deep Copy.\n\n', o1.a, o3.a, '\n', o1.b.c, o3.b.c)
console.log('\n\nDeep Copy: \n','o1: ',o1,'\no2:',o2,'\no3: ',o3)
*/
/* 

Merge Objects

let o1 = { a: 1, b: 2 }, o2 = { c: 3, d: 4 }
let o3 = Object.assign({},o1, o2)

console.log(o1, '\n', o2, '\n', o3)
*/

/*function deepCopy(obj) {
    const newObject = {}
    const keys = Object.keys(obj)
    

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if ((typeof obj[key]) === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }

       

    }

    return newObject

}


let o1 = {
    first: 'Biswajit',
    
    address: {
        street: 'MIICR-55',
        city: 'Chhend Colony'
    }
}

let o2 = deepCopy(o1)
o2.address.city = 'Rourkela'
console.log(o1, '\n', o2)
*/

/*

Prototypial Inheritance

every instance of non primitive type is a type of object.
the class definition contains the methods associated to that class.
every instance/object of that class has a reference to that class definition
that class definition is called the prototype. f

for example if ar = [1,2,3,4] is an array, then it is an instanec of the array type,
it has a reference to the array type definition called its prototype and accessed 
through ar.__proto__.method-name()

the array type itself is derived from the object class, and the class definition has __proto__ member
which references the object class definition .
for example we can access the object methods using
ar.__proto__.__proto__.method-name()
 if there are two methods with the same name in two different levels,
 then the one more specific is invoked.

a interesting situation:
42.__proto__ or 42.toString() will return an error.
but let num = 42
num.__proto__ and num.toString() will not return 

the value 42 is not a object,
but a variable with value a number is an instanceof the class Number
but num instanceof Number also returns false
i guess it evaluates num, and asks is 42 an instance of Number

we can change the method associated to a prototype as so 
if we do
Number.prototype.toString = function(){
    return "100"
}

then num.toString() will return "100" irrespective of the value of num
 */

// shadowing, hoisting 

// var, empty variables, function declarations are hoisted, i.e loaded at the start, 
// even if they are declared later.

// but a function declaration of the type const func = function() {console.log("something")} is not hoisted
// i guess old school js had functions hoisted, but new js doesnot hoist them, so to keep compatibility
// this is there. 

/*

In JavaScript there is a global object. in a browser tab,
which is an instance of javascript engine running,
the window object is the global variable, in the sense that ny global varables we have are actually member variables of the 
global object.

something similar happens when we run a .js script in a nodejs instance.

document is a member variable of the window object which is the DOM tree.





