import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req,res) => {
    res.sendStatus(201);
});

app.put("/user/lip", (req,res) => {
    res.sendStatus(200);
});
app.patch("/user/lip", (req,res) => {
    res.sendStatus(200);
});

app.get("/user/angela", (req,res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Start on ${port}`);
})
///////