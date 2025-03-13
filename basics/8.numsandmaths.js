const score=400
console.log(score)

const val=new Number(200)
console.log(val.toFixed(2))   //it prints as an object

const val1=123.78
console.log(val1.toPrecision(3))
const zero=100000000;
console.log(zero.toLocaleString('en-IN'))       //gives 10,00,00,000 make easy to count zeros

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-5))

console.log(Math.round(5.7))
console.log(Math.ceil(5.2))
console.log(Math.floor(5.9))

//console.log(Math.floor((Math.random()*10)+1))

const min=10
const max=20
//random  numbers betweeen min and max
console.log(Math.floor(Math.random()*(max-min+1))+min)



