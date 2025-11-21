
const { log, error } = require('console')
let fs = require('fs')
//      import modules.

//create or add file
let message = "Hii im message from index.js"
let message2 = " Hello updateed.."
fs.appendFile('text.txt', message2, () => {
    console.log("file create sucessfully")
})


// file read
fs.readFile('text.txt','utf-8',(err,data)=>{
    if (data){
        console.log(data);
    } else{
        console.log("no such file or directory")
    }
})


//unlink mean delete file
fs.unlink('text.txt',()=>{
    console.log("file deleted..")
})


//file rename
 fs.rename('text.txt','new file name.js',()=>{
    console.log('Rename succesfully..')
 })

//create folder
fs.mkdir('myFolder',()=>{
    console.log('Folder create Succefully...')
})


//exists Files
if(fs.existsSync('new file name.js')){
    console.log('files founded..')
}else{
    console.log('no such file founded..')
}


//('..') go to parent
//('.') nearest file
//img="../http"
fs.readdir('.',(err,data)=>{
console.log(data)
})


//Stream
// 1] let readStream=fs.createReadStream()
// 2] let writeStream=fs.createWriteStream()


let readStream=fs.createReadStream('text.txt','utf-8')
readStream.on('data',(result)=>{
    console.log(result)
})

readStream.on('end',()=>{
    console.log('end..')
})
readStream.on('err',()=>{
    console.log('error.')
})


let writeStream=fs.createWriteStream('abc.txt')
writeStream.write('Hii im Message 1')
writeStream.write('Hii im Message 2')
writeStream.write('Hii im Message 3')
writeStream.write('gauri')
writeStream.write('neha')
writeStream.end()


  // let readStream=fs.createReadStream('text.txt')
  // let writeStream=fs.createWriteStream('abc.txt')

  // readStream.pipe(writeStream)