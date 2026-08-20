const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from This Is Successfully done CI/CD 🚀 Pipeline Modified Assalamu Alaikum Mahadi vai!!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});