
const express = require('express');


const app = express();


app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Amama,Caharodien M.' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});