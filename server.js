require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profile', profileRoutes);


const db = require('./db');
db.connect((err) => {
    if (err) {
        console.log('Database connection failed:', err);
        return;
    }

    console.log('Database Connected Successfully!');

    app.listen(process.env.PORT, () => {
        console.log(`Port is running at ${process.env.PORT}`);
    });
});


module.exports = {
    db
}