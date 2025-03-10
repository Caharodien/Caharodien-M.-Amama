const express = require('express');
const User = require('./models/User');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

// Sync the model with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Unable to sync database:', err);
    });

// Define the /users route
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});