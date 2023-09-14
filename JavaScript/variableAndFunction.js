var massage="in globle";
console.log("gobal massage:"+massage);

function a(){
    var massage="in a";
    console.log("a massage:"+massage);
    b();
}

function b(){
    console.log("globle massage:"+massage);
}
a();

/////////////////////////////////////////////

var massage="in globle";
console.log("gobal massage:"+massage);

function a(){
    var massage="in a";
    console.log("a massage:"+massage);
    function b(){
        console.log("in a massage:"+massage);
    }
    b();
}
 a();