console.log("Sai Venkat Reddy Guduru");

let hyd = {}
let vzg = {}
let upl = {}
let kerala = {}
let tamil = {}


const locations = [hyd, vzg, upl, kerala, tamil]

console.log(locations);

hyd.minPC = 20;
hyd.maxPC = 40;
hyd.avgPC = (hyd.minPC + hyd.maxPC)/2;

vzg.minPC = 10;
vzg.maxPC = 30;
vzg.avgPC = (vzg.minPC + vzg.maxPC)/2;

upl.minPC = 54;
upl.maxPC = 44;
upl.avgPC = (upl.minPC + upl.maxPC)/2;

kerala.minPC = 23;
kerala.maxPC = 41;
kerala.avgPC = (kerala.minPC + kerala.maxPC)/2;

tamil.minPC = 23;
tamil.maxPC = 45;
tamil.avgPC = (tamil.minPC + tamil.maxPC)/2;


hyd.randomNumber = function(){

    const upper = this.maxPC;
    const lower = this.minPC;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}
console.log(hyd.randomNumber());

 vzg.randomNumber = function(){
    return Math.floor(Math.random() * 100);
}
 console.log(vzg.randomNumber());

 upl.randomNumber = function(){
    return Math.floor(Math.random() * 100);
}
 console.log(upl.randomNumber());

 kerala.randomNumber = function(){
    return Math.floor(Math.random() * 100);
}
 console.log(kerala.randomNumber());

 tamil.randomNumber = function(){
    return Math.floor(Math.random() * 100);
}
 console.log(tamil.randomNumber());


hyd.cookiesold = function(){
    const customers = this.randomNumber();
    const avgcookies = this.avgPC;
    return customers * avgcookies;
}
console.log("Cookies Sold: " + hyd.cookiesold());