// console.log(2 > 1);     
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
/* expected output*/
// true
// true
// false
// false
// true


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log( null == 0);
// console.log(null >= 0); 
 /* the reason is that an equality check == and comparisons ><>= <= work differently.
comparison convert null to number , treating it as 0 that is why (3) null >= 0 is true and (1) null > 0 is fasle*/
// true
// true
// false
// false
// true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// false
// false
// false

// ===  it also check its data type

console.log("2" === 2); //false
