'use strict'
console.log('starting app');

function locationsclass(name,min,max,avg){
    this.name               = name;
    this.minCV              = min;
    this.maxCV              = max;
    this.avgcookiessoldPC   = avg;
    this.randomNumber = function(){
        const low = 10;
        const high = 20;

        const delta = high - low;

        return Math.floor(Math.random() * delta) + low;

    }
    this.custVisited = function(){
        return this.randomNumber();
    }
    this.cookiesold = function(){
        return this.custVisited * this.avgcookiessoldPC;
    }
}

let pune    = new locationsclass("pune",12,24,50);
let delhi   = new locationsclass("delhi",20,40,40);
let mumbai  = new locationsclass("mumbai",22,56,30);
let chennai = new locationsclass("chennai",26,58,52);
let hyd     = new locationsclass("hyd",30,80,66);
let banglore =new locationsclass("banglore",44,78,48);


let locations = [pune, delhi, mumbai, hyd, chennai, banglore];

for(let i=0; i<locations.length; i++){
    // console.log(locations[i].name);
    for(let j=8; j<16; j++)
    {
        //console.log(j);
        //console.log(locations[i].custVisited());
        console.log('customers visited at ');
        console.log(j , locations[i].custVisited());
    }
}
