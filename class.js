'use strict'
console.log('starting app');

function locationsclass(min,max,avg){
    this.minCV              = min;
    this.maxCV              = max;
    this.avgcookiessoldPC   = avg;
    
}

let pune    = new locationsclass(12,24,50);
let delhi   = new locationsclass(20,40,40);
let mumbai  = new locationsclass(22,56,30);
let chennai = new locationsclass(26,58,52);
let hyd     = new locationsclass(30,80,66);
let banglore =new locationsclass(44,78,48);




/*
pune.custVisited = function(){
    return this.randomNumber();
}
console.log(pune.custVisited());
delhi.custVisited = function(){
    return this.randomNumber();
}
console.log(delhi.custVisited());

banglore.custVisited = function(){
    return this.randomNumber();
}
console.log(banglore.custVisited());

mumbai.custVisited = function(){
    return this.randomNumber();
}
console.log(mumbai.custVisited());
hyd.custVisited = function(){
    return this.randomNumber();
}
console.log(hyd.custVisited());
chennai.custVisited = function(){
    return this.randomNumber();
}
console.log(chennai.custVisited());


// create a for loop to console log all the locations
let locations = [pune, delhi, mumbai, hyd, chennai];
console.log(locations);

for (let i=0; i<locations.length; i++)
{
    console.log("Location " + i);
    // create a for loop to print from 8 to 16
    for(let j=8; j<17; j++)
    {
        console.log("Time at " + j);
        const customers = locations[i].custVisited();
        console.log( "Customers visited : " + locations[i].custVisited());
        console.log("Total cookies sold : " + locations[i].avgcookiessoldPC * customers)
    } 
}
 */