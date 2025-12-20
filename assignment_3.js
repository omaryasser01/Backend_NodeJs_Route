// const path = require("node:path");
// const fs = require("node:fs");
// const http = require("node:http");

// const absolutePath1 = path.resolve("./A_1/notes.txt");
// const absolutePath4 = path.resolve("./A_1/users.json");

// function readUsers() {
//   const data = fs.readFileSync(absolutePath4, "utf-8");
//   return JSON.parse(data);
// }
// const view = readUsers();

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
//==============================================================================================================

// 1. Create an API that adds a new user to your users stored in a JSON file. (ensure that the email of the new user doesn’t exist before) (1 Grade)
// o URL: POST /user

// const server = http.createServer((req, res) => {
//   let data = "";

//   req.on("data", (chunk) => {
//     data += chunk;
//   });

//   req.on("end", (chunk) => {
//     const newUser = JSON.parse(data);
//     const userExist = view.find((a) => {
//       if (a.email === newUser.email) {
//         return a;
//       }
//     });
//     if (userExist) {
//       res.writeHead(409, { "content-type": "application/json" });
//       res.write(
//         JSON.stringify({ message: "user already exists", statuscode: 409 })
//       );
//       return res.end();
//     }

//     view.push(newUser);
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(JSON.stringify({ message: "user added", view }));
//     res.end();
//   });
// });

// server.listen(3000, () => {
//   console.log("running");
// });

//==============================================================================================================
// 2. Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved from the URL (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/id
// مفهمتش الحتة بتاعة ال ID محتاج حضرتك تفهمهالى

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   if (method == "PATCH" && url == "/update") {
//     let data = "";
//     req.on("data", (c) => {
//       data += c;
//     });

//     req.on("end", () => {
//       const { name, age, email } = JSON.parse(data);
//       const update = view.find((a) => {
//         if (a.email == email) {
//           a.age = age;
//           return a;
//         }
//       });
//       if (!update) {
//         res.writeHead(404, { "content-type": "application/json" });
//         res.write("user is not found");
//         return res.end();
//       }
//       res.writeHead(202, { "content-type": "application/json" });
//       res.write(JSON.stringify({ message: "user updated", update }));
//       res.end();
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("running");
// });
//==============================================================================================================
// 3. Create an API that deletes a User by ID. The user id should be retrieved from the URL (1 Grade)
// Note: Remember to delete the user from the file

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   if (method == "DELETE" && url == "/del") {
//     let data = "";
//     req.on("data", (c) => {
//       data += c;
//     });

//     req.on("end", () => {
//       const { email } = JSON.parse(data);
//       const index = view.findIndex((a) => {
//         return a.email == email;
//       });
//       if (index == -1) {
//         res.writeHead(404, { "content-type": "application/json" });
//         res.write("user is not found");
//         return res.end();
//       }
//       view.splice(index, 1);
//       res.writeHead(202, { "content-type": "application/json" });
//       res.write(JSON.stringify({ message: "user deleted", view }));
//       res.end();
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("running");
// });

//==============================================================================================================

// 4. Create an API that gets all users from the JSON file. (1 Grade)
// o URL: GET /user

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   if (method == "GET" && url == "/all") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(JSON.stringify({ messaga: "all users", view }));
//     res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log("running");
// });
//==============================================================================================================

// 1- What is the Node.js Event Loop?
// system that lets Node.js run multiple tasks asynchronously without blocking the main thread.
// the way nodejs excute lines in order to not block any code
// اى log بتتنفذ الاول

// بعد كدا الmicrotasks و لو حاجة فيها next بتاخد اولوية

// بعد كدا التايمرز بقى لو finish بينفذها لو مخلصتش بيحطها فى الArray بتاعت timers[]

// 2. What is Libuv and What Role Does It Play in Node.js?
// c library that provides event loop and handles asycnhronous operations , contains virtual threads

// 3. How Does Node.js Handle Asynchronous Operations Under the Hood?
// 1. excute settimeout and setImmediate (finished)
// 2. excute callbacks for completed operations
// 3.handles new events and finished Timers
// 4.excute setImmediate callbacks
// 5.close callbacks phase

// 4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js?
// Stack = what’s running now

// Queue = what’s waiting to run

// Loop = moves tasks from the queue to the stack when possible

// 5. What is the Node.js Thread Pool and How to Set the Thread Pool Size?
// the virtual threads that excute requests , changed from command line based on OS

// set UV_THREADPOOL_SIZE=8 && node appendFile.js

// 6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?
// Asynchronous tasks are sent to virtual threads.

// When finished, their callbacks go into the event queue.

// The event loop checks the call stack and executes callbacks when the stack is empty.
