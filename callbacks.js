var array = [10,11,12,13,14]
array.forEach((ele,index, arr)=>console.log(ele,index,arr));

console.log(array.filter((ele)=>ele % 2 === 0)); //[ 10, 12, 14 ]

console.log(array.map((ele)=>ele * ele));//[ 100, 121, 144, 169, 196 ]

console.log(array.reduce((acc,ele) => acc + ele,0));//60