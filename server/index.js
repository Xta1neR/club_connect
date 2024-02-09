const express = require('express');
const {mongoose} = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParse = require('cookie-parser');
const axios = require("axios");

// Database connection

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.log('Database connection error:', err);
})

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Middleware
app.use(express.json())
app.use(cookieParse())
app.use(express.urlencoded({extended: false}))


app.use('/', require('./routes/authRoutes'))
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is bhag raha hai on port ${port}`);
})
