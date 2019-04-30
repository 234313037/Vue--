const express = require("express");//引入express
const mongoose = require('mongoose');//引入mongoose
const bodyParser = require("body-parser")//引入body-parser
const passport = require("passport");//引入passport

const app = express();//实例化一个express APP

//引入users.js
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");

//DB config

const db = require("./config/keys").mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Connect to mongodb
mongoose
    .connect(
        db,
        { useNewUrlParser: true } //过滤连接时的提醒
    )
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err)); //连接mongoose


    //possport初始化
app.use(passport.initialize());

require("./config/passport")(passport);
// app.get("/",(req,res)=>{

//     res.send("Hello World!");
// }) //设置路由
//使用routers
app.use("/api/users",users);
//使用routers
app.use("/api/profiles",profiles);

const port = process.env.port || 5000;//定义端口号

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
}) //监听