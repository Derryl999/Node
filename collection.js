// module.exports.counter=function (arr){
//     var len=arr.length
//     return 'there are '+len+' elements'
// }
counter=function (arr){
    var len=arr.length
    return 'there are '+len+' elements'
}
var add=function(a,b)
{
    return `sum is ${a+b}`;
}

var pi=3.142;


// module.exports.counter = counter;
// module.exports.add=add;
// module.exports.pi=pi;

module.exports={
    counter:counter,
    add:add,
    pi:pi
}