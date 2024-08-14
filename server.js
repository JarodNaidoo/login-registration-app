const express = require('express');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');

const app = express();


connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
