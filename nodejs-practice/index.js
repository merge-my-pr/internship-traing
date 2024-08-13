const file=require('fs')  // file system

// let name="ronak"
// console.log(name);

// let filedata=file.readFileSync('data.txt').toString();
// console.log(filedata);


// data.txt->filedata
// file.renameSync('data.txt','filedata.txt')  // data->filedata


// filedata read

// before writing to the file
// let filedata2=file.readFileSync('filedata.txt').toString();
// console.log(filedata2);

// filedata.txt
// data1.txt


// filedata.txt <- data.txt
// data1.txt-> filedata.txt
// filedata.txt <- data1.txt
// file.renameSync('data1.txt','filedata.txt')


// file.writeFileSync('filedata.txt','this is file data wrote')

//after writing to file
// let filedata3=file.readFileSync('filedata.txt').toString();
// console.log(filedata3);


// file.appendFileSync('filedata.txt','hello world')

// let filedata4=file.readFileSync('filedata.txt').toString();
// console.log(filedata4);

// // delete file
// file.unlinkSync('filedata.txt')


// delete folder/directory
file.rmdirSync('testfolder')






