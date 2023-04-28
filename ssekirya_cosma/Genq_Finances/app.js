const express = require('express');
const {resolve} = require('path');
const port = 3000;
const app = express();
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


//we creat an environment 
//require('dotenv').config();
// const config = require("./Config/database")

//import routes
// const employeeRoutes = require("./Routes/employeeRoutes")



// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// //creating a connection between a controller and the database using mongoose middleware
// mongoose.connect(config.database,{
//   //useNewParser collects data then formats it  into what backend understands, 
//   useNewUrlParser:true,
//   useUnifiedTopology: true
// })

// const db = mongoose.connection
// //check if db is connected successfully
// db.once("open", ()=>{
//   console.log("Connected to db")
// })
// db.on("error", (err)=>{
//   console.error(err)
// })

//TO VIEW PUG(setting templating engine)
app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))

//handling public folder(__dirname resolves to the root folder of the application)
app.set(express.static(path.join(__dirname, "public")));







// // ===================================
// //__dirname will resolve project folder
// router.get("/", (req,res)=>(
//   res.sendFile(path.join(__dirname + "/index.html"))
// ));

// router.get("/about", (req,res)=>(
//   res.sendFile(path.join(__dirname + "/about.html"))
// ));




// //add the router
// app.use("/",router)
// app.use("/about",router)


//step2;set up a server
// Set up the server
// app.use('/', employeeRoutes);
// app.use('/', aboutRoutes);
// app.use('/', contactRoutes);
// app.use('/', registerRoute); 
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
