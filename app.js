//server setup

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static('public'));


app.use((req, res, next) => {
    
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
