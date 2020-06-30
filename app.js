//passing function to another funtion
function callFunction(func)
{
    func();
}

//normal function statement 
function hello(){
    console.log('hello world')

}

//function expression 
var bye=function(){
    console.log('good bye')
}

callFunction(bye)
callFunction(hello)

