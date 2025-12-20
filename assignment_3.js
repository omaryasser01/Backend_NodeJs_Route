const path = require("node:path");
const fs = require("node:fs");
const absolutePath1 = path.resolve("./A_1/notes.txt");

const readFileStream = fs.createReadStream(absolutePath1, {
  encoding: "utf8",
  highWaterMark: 500,
});

// // 1. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// // • Input Example: "./big.txt"
// // • Output Example: log each chunk

// readFileStream.on("data", (chunk) => {
//   console.log("===========data=============");
//   console.log(chunk);
// });
//==============================================================================================================

// 2. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams

// const absolutePath2 = path.resolve("./A_1/dest.txt");
// const writeFileStream = fs.createWriteStream(absolutePath2);
// readFileStream.on("data", (chunk) => {
//   writeFileStream.write(chunk);
// });

//==============================================================================================================

// 3. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt", "./data.txt.gz"

// const absolutePath3 = path.resolve("./A_1/notes3.zip");
// const { creatGzip } = require("node:zlib");
// const gzip = creatGzip;
// const writeFileStream = fs.createWriteStream(absolutePath3);
// readFileStream.pipe(writeFileStream);
