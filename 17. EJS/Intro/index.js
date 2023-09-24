import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDate();
    
    let type = "weekday";
    let a = "it's time to study hard!";
    
    if (day === 0 || day === 6) {
        type = "weekend";
        a = "it's time to hang out in big city.";
    };

    res.render("index.ejs", {
        dayType: type, 
        advice: a,
    });
});

app.listen( port, () => {
    console.log(`Listening on port ${port}`);
});