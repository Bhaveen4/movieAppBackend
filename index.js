const express = require("express");
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const movieInfo = require('./db');

// cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})

app.get('/',(req,res)=> {
    res.send("Server Up");
})


app.post('/create',(req,res)=>{
 try{
    console.log(req.body);
    let movie = new movieInfo(req.body);
    movie.save();
    res.send("data Added");
 }
 catch (error) {
    res.status(500).send(error);
 }
})

app.get('/view', async (req,res)=>{
    try {
        let result = await movieInfo.find();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error);
    }
})


app.post('/update', async (req,res)=>{
    try {
         await movieInfo.findByIdAndUpdate(req.body._id,req.body);
         res.send("Data Updated");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/delete', async (req,res)=> {
    try {
     await movieInfo.findByIdAndDelete(req.body._id);
    res.send("Data Deleted")
     } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/search', async(req,res) => {
    try {
        let result = await movieInfo.find(req.body);
         res.json(result)

    } catch (error) {
        res.status(500).send(error); 
    }
})






app.listen(3002,()=>{
    console.log("server is up");
})