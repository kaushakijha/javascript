//alert("hello")  we are using node js not browser

console.log(typeof object);
console.log(typeof null);
console.log(typeof undefined)
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)         //false ->same still treats everyone as unique

const mysun=function(){
    console.log("hello");
}