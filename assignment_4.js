const express = require("express");
const app = express();
const port = 3000;
const fs = require("node:fs");
const path = require("node:path");
const abspath = path.resolve("./users.json");

function read() {
  const dataa = fs.readFileSync(abspath, "utf8");
  return JSON.parse(dataa);
}
const users = read();

app.listen(port, () => {
  console.log("server is running");
});

//================================================================================================================
// 1. Create an API that adds user new user to your users stored in user JSON file. (ensure that the user of the new user doesn’t exist before)(1
// Grades)
// o URL: POST /user

// app.use(express.json());
// app.post("/user", (req, res, next) => {
//   const nemEmail = req.body.email;
//   const used = users.find((user) => {
//     if (user.email == nemEmail) {
//       return user;
//     }
//   });
//   if (used) {
//     res.status(404).json({ message: "user already exists" });
//   } else {
//     users.push(req.body);
//     fs.writeFileSync(abspath, JSON.stringify(users, null, 2));
//     res.json({ message: "user added susseccfully", users });
//   }
// });

// app.use((req, res, next) => {
//   res.status(404).json({ message: "error , not found" });
// });
//================================================================================================================
// 2. Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved from the params. (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/:id

// app.use(express.json());
// app.patch("/user/:id", (req, res, next) => {
//   const wantedID = req.params.id;
//   const index = users.findIndex((user) => {
//     if (user.id == wantedID) {
//       return user;
//     }
//   });
//   if (index < 0) {
//     return res.status(404).json({ message: "user id not found" });
//   }
//   const newValue = req.body;
//   if (newValue.name) {
//     users[index].name = newValue.name;
//     fs.writeFileSync(abspath, JSON.stringify(users, null, 2));
//     res
//       .status(200)
//       .json({ message: "user name updated successfully", users: users[index] });
//   }
//   if (newValue.email) {
//     users[index].email = newValue.email;
//     fs.writeFileSync(abspath, JSON.stringify(users, null, 2));
//     res.status(200).json({
//       message: "user email updated successfully",
//       users: users[index],
//     });
//   }
//   if (newValue.age) {
//     users[index].age = newValue.age;
//     fs.writeFileSync(abspath, JSON.stringify(users, null, 2));
//     res.status(200).json({
//       message: "user age updated successfully",
//       users: users[index],
//     });
//   }
// });

// app.use((req, res, next) => {
//   res.status(404).json({ message: "error , not found" });
// });
//================================================================================================================
// Create an API that deletes a User by ID. The user id should be retrieved from either the request body or optional params. (1 Grade)
// Note: Remember to delete the user from the file
// o URL: DELETE /user{/:id}

// app.use(express.json());
// app.delete("/user/:id", organizeDelete);
// app.delete("/user", organizeDelete);

// function organizeDelete(req, res, next) {
//   const wantedID = req.params.id || req.body.id;
//   const index = users.findIndex((user) => {
//     if (user.id == wantedID) {
//       return user;
//     }
//   });
//   if (index < 0) {
//     return res.status(404).json({ message: "user id is not found" });
//   }
//   users.splice(index, 1);
//   fs.writeFileSync(abspath, JSON.stringify(users, null, 2));
//   res.json({ message: "user deleted successfully", users });
// }

// app.use((req, res, next) => {
//   res.status(404).json({ message: "error , not found" });
// });
//================================================================================================================
