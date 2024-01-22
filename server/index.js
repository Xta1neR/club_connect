const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRouter);
app.use("/notes",noteRouter);

app.get("/",(req,res)=>{
    res.send("Hello")
});

mongoose.connect("mongodb+srv://goswamirituraj03:Nlpu2021!@cluster0.2vyq87q.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("server started on port 5000");
    })
})
.catch((error)=>{
    console.log(error);
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})
