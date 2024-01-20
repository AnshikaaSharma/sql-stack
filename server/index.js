

const express=require("express");
const User = require("./models/user");
const mongoose = require("mongoose");
const authRouter=require("./routes/auth");
const adminRouter=require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
//init
//const PORT =  3000;
const PORT = process.env.PORT || 3000;
const app  = express(); 

const  DB="mongodb+srv://anshika:anshika@cluster0.pxslxad.mongodb.net/sqlstack?retryWrites=true&w=majority";
//const DB="mongodb+srv://anshika:anshika@cluster0.pxslxad.mongodb.net/?retryWrites=true&w=majority";

//middware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter); 
//conections
mongoose.connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT,"0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});


   


/*
// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
//const productRouter = require("./routes/product");
//const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const  DB="mongodb+srv://anshika:anshika@cluster0.pxslxad.mongodb.net/sqlstack?retryWrites=true&w=majority";
// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
//app.use(productRouter);
//app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});*/