const fs = require('node:fs');

fs.appendFile("hello.txt","mynigga", function(err){
    if(err) console.error(err); 
    else console.log("done");
})
fs.rename("hello.txt","dhankuta.txt",function(err){
    if(err) console.error("youtube");
    else console.log("china")
})
fs.copyFile("dhankuta.txt","./copy/copy.txt",function(err){
    if(err) console.error(err); 
    else console.log("done"); 
})