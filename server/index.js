const express = require('express');
const {mongoose} = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParse = require('cookie-parser');

// Database connection

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.log('Database connection error:', err);
})

const app = express();

// Middleware
app.use(express.json())
app.use(cookieParse())
app.use(express.urlencoded({extended: false}))


app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => {
  console.log(`Server is bhag raha hai on port ${port}`);
})







// // Import routes
//  const userRoutes = require('./routes/userRoutes');

// const organizationRoutes = require('./routes/organizationRoutes');

// const recruitmentRoutes = require('./routes/recruitmentRoutes');

// const interviewRoutes = require('./routes/interviewRoutes');

// const domainRoutes = require('./routes/domainRoutes');

// const announcementRoutes = require('./routes/announcementRoutes');





// // Use routes
//  app.use('/api/users', userRoutes);

// app.use('/api/organizations', organizationRoutes);

// app.use('/api/recruitment', recruitmentRoutes);

// app.use('/api/interviews', interviewRoutes);

// app.use('/api/domains', domainRoutes);

// app.use('/api/announcements', announcementRoutes);




// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

