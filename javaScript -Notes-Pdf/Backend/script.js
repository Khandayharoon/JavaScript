const express =  require("express");
const app = express();
const PORT = 3000;
app.set('view engine','ejs')

app.use((req,res,next)=>{
    console.log('Middleware');
    next();
});

app.get('/',(req,res)=>{
    res.send('home page');
});

app.get('/profile',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>{
    console.log(`server is listing at ${PORT}`);
});