console.log("hello world");
console.log("a"/"n");
console.log(typeof 100);
console.log(typeof "fun");
console.log(typeof [1, 2, 3]);

let name = "srikanth";
name = "Jagadees" ;
console.log(name);

function beautiful()
{
    let quote = "Live long life";
    var niceQuote = "Be good do good";
    console.log(quote);
    console.log(niceQuote);
}
beautiful();
// console.log(quote);
// console.log(niceQuote);

function exam(marks){
    if(marks>35){
        var msg = "pass";
    }
    else{
        var msg = "fail";
    }
    console.log('you are '+ msg);
}
exam(50);
var x1 = 8;
var x2 = "4";
console.log(x1+x2);
console.log(x1-x2);

var x3 = 8;
var x4 = "4";
console.log(x3+parseInt(x4));
console.log(x3 + +x4);

// var t1=[200,400];
// var t2=[200,400];
// var t3=t1;
// console.log(t1===t2);
// console.log(t1===t3);

var t1=[200,400];
var t2=[200,400];
var t3=t1;
t1.push(100);
t2.push(80);
t3.push(70);
console.log(t1);
console.log(t2);
console.log(t3);
