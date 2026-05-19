// console.log(2>1);
// console.log(2>=1);
// console.log(1<2);
// console.log(1<=2);
// console.log(1==2);
// console.log(2!=1);


// typescript has strict rule that we can only compare same data types


// console.log("2">1);      
// console.log("02">1);


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);    


// the reason is that an equality check ++ and comparison check < > <= >= work differently.
// comparisons convert null to a number, treating it as a 0.
// that's why (15)null>= 0 is true and null >0 is false 


// console.log(undefined == 0);
// console.log(undefined >0);
// console.log(undefined<0);


// === strictly checks the elements (it checks data type also)
console.log("2"===2);

