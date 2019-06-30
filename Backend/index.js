const express = require('express');


const app = express();
const PORT = 5001;

app.get('/', (req,res) => {
    return res.send('The API is working');
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ` + PORT + " bitch! ")
})