const express = require('express');
const app = express();
const PORT = 3001;

app.use((req,res,next)=>{
    console.log(`i am middleware`);
    next(); // Call next to pass control
});

app.get('/',(req,res)=>{
    res.send('i am home page');
});

app.get('/profile',(req,res)=>{
    res.send('i am in the profile page');
});

app.get('/profile/:username',(req,res)=>{
    res.send(`i am from ${req.params.username}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});