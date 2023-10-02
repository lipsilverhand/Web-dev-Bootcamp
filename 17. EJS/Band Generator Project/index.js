import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended: true}));

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/submit", (req,res) => {
    const r_adj = adj[Math.floor(Math.random() * adj.length)];
    const r_n = n[Math.floor(Math.random() * n.length)];
    const name = r_adj + " " + r_n;
    res.render("index.ejs", {name});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const adj = [
    "Super",
    "Heavy",
    "Light",
    "Happy",
    "Angry",
    "Light",
    "Dark",
    "Savage",
    "Bright",
    "Unstop",
    "Toxic",
    "Evil",
    "Fearless",
    "Slow",
    "Top"
];

const n = [
    "Star",
    "Ground",
    "Planet",
    "Generation",
    "Hero",
    "Machine",
    "Dragon",
    "Ship",
    "Town",
    "Tech",
    "Guys",
    "Boiz",
    "Girlz",
    "Castle"
];