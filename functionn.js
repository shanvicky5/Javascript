
var res1= add(10,20);
var res =sub(20,10);
console.log(res1);
console.log(res);
function sub(a,b){
    console.log(a-b);
    return a-b;


}
function add(a,b){
   console.log(a+b);
   return a+b;
}


function operetion (a,b,type){ // named function
    if(type =='add'){
        return a  +b;
    }
    else if(type =='sub'){
        return a - b;
    }
    else if(type =='mul'){
        return a * b;
    }
    else{
        return a / b;
    }
}
console.log(operetion(10,20,'mul')); 

var square = function(a){    //anonymous function
    return a*a; 
}
console.log(square(2));

var vsquare =(function(){    // immediatly invoked function expression -IIFE
    var name= "vicky";
    return name;
})();
console.log(vsquare);