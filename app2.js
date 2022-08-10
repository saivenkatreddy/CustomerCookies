'use strict'
console.log('starting app');

let pune    = {};
let delhi   = {};
let mumbai  = {};
let chennai = {};
let hyd     = {};
let banglore ={};


//console.log(typeof(pune));
//console.log(delhi);
console.log(pune);

pune.minCV = 12;
pune.maxCV = 32;
pune.avgcookiessoldPC = 80;

console.log(pune);

delhi.minCV = 24;
delhi.maxCV = 54;
delhi.avgcookiessoldPC = 200;

console.log(delhi);

mumbai.minCV = 18;
mumbai.maxCV = 36;
mumbai.avgcookiessoldPC = 66;

console.log(mumbai);

chennai.minCV = 24;
chennai.maxCV = 54;
chennai.avgcookiessoldPC = 140;

console.log(chennai);

hyd.minCV = 34;
hyd.maxCV = 58;
hyd.avgcookiessoldPC = 90;

console.log(hyd);

banglore.minCV = 64;
banglore.maxCV = 88;
banglore.avgcookiessoldPC = 120;

console.log(banglore);

// create a array named as locations
// add the objects to this array



// create a method for anyone of your location object
// method name shoul be randomNumber
// return a random number 

delhi.randomNumber = function(){
    const low = 10;
    const high = 20;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}
console.log(delhi.randomNumber());

hyd.randomNumber = function(){
    const low = 20;
    const high = 40;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}
console.log(hyd.randomNumber());

banglore.randomNumber = function(){
    const low = 22;
    const high = 42;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}
console.log(banglore.randomNumber());

chennai.randomNumber = function(){
    const low = 30;
    const high = 54;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}
console.log(chennai.randomNumber());

pune.randomNumber = function(){
    const low = 30;
    const high = 54;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}
console.log(pune.randomNumber());

mumbai.randomNumber = function(){
    const low = 34;
    const high = 66;
    const delta = high - low;
    return Math.floor(Math.random() * delta) +low;
}
console.log(mumbai.randomNumber());

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