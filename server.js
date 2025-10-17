// WEEK TWO ASSIGNMENT FROM BECTECHFIED
// HOW TO USE EXPRESS FRAME WORK TO CREATE API

console.log("MY EXPRESS APP");

const express = require('express');

const app = express();
const PORT = process.env.PORT || 200;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send("MY WEEK TWO API");
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({
            error: "Please fill the field well!"
        });
    }
    
    res.status(200).json({
        message: `${name}, ${email}`
    });
});

app.get('/user/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: "profile"
    });
});

app.listen(PORT, () => {
    console.log(`My API SERVER IS RUNNING ON PORT http://localhost:${PORT}`);
});