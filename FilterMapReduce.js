const { access } = require("fs");

var arr1 = [10,11,12,13,14,15]
var newArr = arr1.filter(function(ele){
    if(ele%2 === 0){
        return ele;
    }
})

console.log('Original Array:',arr1);
console.log('Even array: ',newArr);

//array.map(function(ele){})
var array = [1,2,3,4,5,6]
var sq_arr = array.map((ele)=>ele*ele);

// var sq_arr = array.map(function(ele){
//     return ele * ele;
// })
console.log('Original Array:',array);
console.log('Square Array:',sq_arr);

//reduce(function(acc,ele){code})

var arr = [1,2,3,4,5]
var product =arr.reduce((acc,ele) => acc * ele,1);
var sum = arr.reduce((acc,ele) => acc + ele,0);

console.log('Sum is:',sum)
console.log('Product is:',product)

// var sum = arr.reduce(function(acc,ele){
//     return ele + acc;
// },0);