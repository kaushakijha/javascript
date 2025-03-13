let mydate=new Date()
console.log(mydate);
console.table(mydate.toString());
console.table(mydate.toDateString());
console.log(mydate.toISOString())
//console.log(mydate.toJSON())
let mycreatedate=new Date(2023,0,23)
let mytime=new Date(2023,4,26,10,98)  //first three date next two time vvvv
console.log(mycreatedate.toDateString())
console.table(mytime.toLocaleString());

let mytimestamp=Date.now()  //it gives value in milliseconst wrt to 1 jan 1970
//console.log(mytimestamp);
console.log(Math.floor(Date.now()/1000))                //to get values in second

let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)   //0 based indexing of month by javascript

//customizable locale day format

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
}))