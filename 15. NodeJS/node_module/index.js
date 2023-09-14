const fs = require("fs");

// Create new file
fs.writeFile("message.txt", "Hello from Phuoc Huynh", (err) => {
    if (err) throw err;
    console.log("The file has benn saved!");
});

//Read created file
fs.readFile("message.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});