console.log("Server is up and running");

const express = require("express"); // modules for node         commonjs
const app = express();
const port = 8000;

//Create server from HTTP

app.get("/course", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(port, () => {
    console.log('App running on $(port)')
})