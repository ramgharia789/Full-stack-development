function multiply(x,y){
    return x*y;
};
console.log(multiply(4,2));
multiply.version="v.1.2.1";
var version=multiply.version; // v.1.2.1

console.log(multiply.version); // v.1.2.1
console.log(version); // v.1.2.1

//////////////////function factory
function multiplier(value){
var myFun = function(x){
    return value*x;
};
return myFun;
}
var mutiBy3=multiplier(3);
console.log(mutiBy3(19));
var doubleAll= multiplier(2);
console.log(doubleAll(30));


/////////////////////////////passing function

function doOperational(x,operation){
    return operation(x);
};
console.log(doOperational(5,mutiBy3));

