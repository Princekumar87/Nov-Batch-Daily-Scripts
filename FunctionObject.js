// function greet(){
//     console.log('Hello');
// }

// console.log(greet, typeof greet);

// Functions are Objects in JavaScript;

function identifyDataType(value) {
    if (value === null) {
        return 'Null';
    }
    if (Array.isArray(value)){
        return 'Array'
    }
    return typeof value;
}

res = identifyDataType([10,20,30]);
console.log(res);

console.log(Array.isArray(null));//false
console.log(Array.isArray([10,20,30]));//true