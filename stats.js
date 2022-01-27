const os = require('os')



const {freemem,totalmem }= os // { } modo de extrassão = os 

setInterval( ()=> {

    const mem = parseInt(freemem()/1024/1024)
    const total = parseInt(totalmem()/1024/1024)
    const livre = parseInt((mem/total)*100)
    
    const apresentacao ={
        utilizando:`${mem} MB`,
        total : `${total} MB`,
        livre: `${livre} %`
    }
    
    console.clear();
    console.table(apresentacao)
},1000)
