const express =  require("express");
const app = express();
const router = require("./router/auth-router");

//Adding MongoDB database
const url = "mongodb+srv://goswamirituraj03:Nlpu2021!@clubconnect.0ap6gnz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

//Checking connection for mongodb
const db = mongoose.connection;
db.on("error", (error) => {console.log(error)});
db.on("connected", () => {console.log("Connected to Database")});

// Mount the Router
app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
