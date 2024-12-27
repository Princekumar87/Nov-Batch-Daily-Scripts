var arr1 = [10,50.45,true,'Kod',{name: 'Priya', age : 45},()=>{console.log('Function')}, [100,200]]

console.log('The length of arr1 array:',arr1.length);

for(var i =0; i<=arr1.length-1 ; i++){
    console.log(`Element at index ${i}`, arr1[i]);
}

// Array can store Homogeneous (Data with same data Type) as well as Heterogeneous (Data with diff data Type) Type of Data:
// console.log('Element at 0th index:',arr1[0]);
// console.log('Element at 1st index:',arr1[1]);
// console.log('Element at 2nd index:',arr1[2]);
// console.log('Element at 3rd index:',arr1[3]);