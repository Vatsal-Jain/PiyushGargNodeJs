const fs = require('fs')
const os = require('os')
console.log(os.cpus().length)

// Sync Write File Blocking request
// fs.writeFileSync('./test.txt','my first file created')

// Asncy Write FIle Non Blocking Request

// fs.writeFile("./asncytest.txt","Heeloo",(err) => {})

// fs.readFile("./test.txt",'utf-8',(err,result) => {
// if(err){
//     console.log(err)
// }
// else{
//     console.log(result)
// }
// })


// append 

// fs.appendFileSync("./test.txt",`\nmore absah aaded`)

//copy file

// fs.cpSync("./test.txt","./copy.txt",{})

// delete file
// fs.unlinkSync("./copy.txt")

//stats 
// console.log(fs.statSync("./test.txt"))

//make directory
// fs.mkdirSync('myNewDire/a/b',{recursive:true})

