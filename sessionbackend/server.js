const express = require('express')
const cors = require('cors');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const userModel = require('./UserModel.js');
const jwt = require('jsonwebtoken');
const app = express();
require('./connection.js');

app.use(express.json());
app.use(cors());
const store = new MongoDBSession({
    uri: 'mongodb+srv://vishalgai:UKkUknD3ztBhSxdV@cluster0.apnmfbt.mongodb.net/sessionStorage?retryWrites=true&w=majority',
    collection: 'mySessions',
})

app.use(
    session({
        secret: 'Key that will sign cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
)

const isAuth = (req, res, next) =>{
    if(req.session.isAuth){
        next();
    }else{
        console.log("bad user");
        res.send("Authentication Failed!");
    }
}

app.post('/register',async(req,res)=>{
    console.log(req.body);
    // const {username, email, password} = req.body;

    let user = await userModel.findOne({email: req.body.email});

    if(user){
        console.log("email exist")
        res.send({message: "User exit with same emailId"});
    }

    user = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    await user.save();
    console.log(req.session.id);
    res.send({Message: "LogIn Sucessfully!"})
})

app.post('/login',async(req,res)=>{
    console.log(req.body);
    // const {username, email, password} = req.body;

    let user = await userModel.findOne({email: req.body.email});

    if(!user){
        console.log("email exist")
        res.send({message: "Register Yourself!"});
    }

    // user = new userModel({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // })

    // await user.save();
    req.session.isAuth = true;
    console.log(req.session.id);
    res.send(req.session.isAuth);
})

app.post('/logout',(req,res)=>{
    req.session.destroy((err) => {
        if(err) throw err;
        console.log("logOut");
        res.send(req.session.isAuth = false);
    })
})

app.get('/',(req,res)=>{
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello Session created")
})


app.listen(4350,()=>{
    console.log("Server Started at: 4350");
})