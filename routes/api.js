// index.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const homeRoutes = require('./routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use the routes defined in homeRoutes
app.use('/api', homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
