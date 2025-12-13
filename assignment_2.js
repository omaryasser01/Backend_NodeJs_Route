// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}

// const path = require("node:path");
// function q_1(name1, name2) {
//   console.log({ file: name1, dir: name2 });
// }
// q_1(__filename, __dirname);

//====================================================================================================================================
// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf"

// const path = require("node:path");
// function q_2(name) {
//   console.log(path.basename(name));
// }
// q_2("/user/files/report.pdf");

//====================================================================================================================================
// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example: { dir: "/folder", name: "app", ext: ".js"}
// • Output Example: “/folder/app.js”

// const path = require("node:path");
// function q_3({ dir, name, ext }) {
//   console.log(path.format({ dir, name, ext }));
// }
// q_3({ dir: "/folder", name: "app", ext: ".js" });
//====================================================================================================================================
// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”

// const path = require("node:path");
// function q_4(name) {
//   console.log(path.extname(name));
// }
// q_4("/docs/readme.md");
//====================================================================================================================================
// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example: { Name: “main”, Ext: “.js” }

// const path = require("node:path");
// function q_5(name) {
//   console.log({ name: path.parse(name).name, ext: path.parse(name).ext });
// }
// q_5("/home/app/main.js");

//====================================================================================================================================
// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true

// const path = require("node:path");
// function q_6(name) {
//   console.log(path.isAbsolute(name));
// }
// q_6("/home/user/file.txt");
//====================================================================================================================================
// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

// const path = require("node:path");
// function q_7(...names) {
//   console.log(path.join(...names));
// }
// q_7("src", "components", "App.js");
//====================================================================================================================================
// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

// const path = require("node:path");
// function q_8(name) {
//   console.log(path.resolve(name));
// }
// q_8("./index.js");
//====================================================================================================================================
// 9. Write a function that joins two paths. (0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt

// const path = require("node:path");
// function q_9(p1, p2) {
//   console.log(path.join(p1, p2));
// }
// q_9("/folder1", "folder2/file.txt");
//====================================================================================================================================
// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.

// const path = require("node:path");
// const fs = require("node:fs");
// function q10(p) {
//   fs.unlink(p, (err) => {
//     console.log(err);
//   });
// }
// q10("/route_nodejs/A_1/test.js");
//====================================================================================================================================
// 11. Write a function that creates a folder synchronously. (1 Grade)
// • Output Example: “Success”

// const path = require("node:path");
// const fs = require("node:fs");
// function q_11(name){

//     fs.mkdirSync(name);
// }
// q_11("/route_nodejs/A_1/new.js");
//====================================================================================================================================
// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// • Output Example: Welcome event triggered!

// const { EventEmitter } = require("node:events");
// const event = new EventEmitter();
// event.on("start", () => {
//   console.log("Welcome event triggered!");
// });
// event.emit("start");
//====================================================================================================================================
// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// • Input Example:"Ahmed"
// • Output Example: “User logged in: Ahmed”

// const { EventEmitter } = require("node:events");
// const event = new EventEmitter();

// event.on("register", (name) => {
//   console.log(`user logged in : ${name}`);
// });

// event.emit("register", "ahmed");
//====================================================================================================================================
// 14. Read a file synchronously and log its contents. (1 Grade)
// • Input Example:"./notes.txt"
// • Output Example: the file content => “This is a note.”
