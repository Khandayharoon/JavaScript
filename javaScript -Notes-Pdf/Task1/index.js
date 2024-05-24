const express =  require('express');
const app = express();
const PORT = 3000;

//setting up ejs
app.set('view engine','ejs');

//middleware
app.use((req,res,next)=>{
    console.log('middleware');
    next();
});

//routing
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/Aboutus',(req,res)=>{
    res.render('aboutus');
});

//use for static file
app.use(express.static('./public'));

app.listen(PORT,()=>{
    console.log(`server is Listening on port numbert ${PORT}`);
});
