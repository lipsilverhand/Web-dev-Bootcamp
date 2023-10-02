import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/submit", (req,res) => {
    const full = req.body["fname"] + req.body["lname"];
    const count = req.body["fname"].length + req.body["lname"].length;
    res.render("index.ejs", {count, full});
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});