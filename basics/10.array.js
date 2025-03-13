//array makes shallow copy -->same reference

const arr=[1,0,"hello","jfh"];
const arr2=new Array(2,4,6,"hites")

//array methods
// arr.push(6);
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.unshift(10)
// console.log(arr)

// const newarr=arr.join();
// console.log(newarr)                         //convert to string format 

//+++++++++++++++++++++++++++++++++++++++++++=slice vs splice++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newarr=[1,3,5,7,10,12,14,16]

console.log(`origioal arr ${newarr}`)
console.log(newarr.slice(2,5));
console.log(`arr after slic ${newarr}`)             //slice dont change origional array but splice changes origional array
console.log(newarr.splice(2,5))
console.log(`array after splice is  ${newarr}`)             
  

//concat function
const arr1=[1,2,3,4,5,6,7,8,9,[10,20,30,40,[12,34,53]],];
const arr3=[50,60,70];  
arr1.push(arr3);        //whole array is added as a single object
console.log(arr1)
const newarr1=arr1.concat(arr3);
console.log(newarr1)  //add as unique alement
const flattedarray=arr1.flat(Infinity)
console.log(flattedarray)

console.log(Array.isArray("kaushaki"))
console.log(Array.from("kaushaki jha")) 
console.log(Array.from({name:"kaushaki"}))       //remember as it gives empty we need to specify we need array from keys or values

let s1=100;
let s2=300;
let s3="hello"
console.log(Array.of(s1,s2,s3));