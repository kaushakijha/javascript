//object literals ---->not forms singleton  objects 
//constructor ----->always forms singleton object  (only one of a type object f)

//object.create()=>consturctor method

//object literals

//adding symbol to an object 

const mysym=Symbol("key1");
console.log(typeof mysym)
const jsuser={
    name:"kaushaki",
    age:24,
    locatin:"chitkara",
    islog:false,
    lastday:["monday","tuesdat","wednesday"],
    [mysym]:"mykey1"                    //symbol should always be decleared like this only in objects
}
console.log(jsuser.name);
console.log(jsuser["age"])
console.log(jsuser.lastday[0])
console.log( typeof mysym)
console.log(jsuser[mysym])