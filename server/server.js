const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./connect/database.js');
const dotenv = require('dotenv').config();

connectDB();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes.js'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
