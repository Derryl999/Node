 console.log('hello world')
 setTimeout(function(){
     console.log('printing after 4 seconds')
 },3000)


 time=0;
 var timer=setInterval(function(){
     time +=1;
     console.log(time,'seconds have passed')
     if(time>=10)
     clearInterval(timer)
 },1000)
 
console.log(__dirname)
console.log(__filename)