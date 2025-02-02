import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"



import member from "./Routes/userRegisterRoutes.js"
// import savingroute from "./routes/savingroute.js";
// import bankroute from "./routes/bankroute.js"
// import transferRoute from "./Routes/transferRoute.js"
// import addExpense from "./Routes/expenseRoute.js"
import dotenv from "dotenv";
import Home from "./Routes/homeRoute.js"
// import router from "./Routes/userRegisterRoutes.js";

// import bankroute from "./routes/bankroute.js";
// import expenseRoute from "./Routes/expenseRoute.js";
// import incomeRoute from "./Routes/incomeRoute.js";








dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 


// app.use('/api/v1', savingroute)
// app.use('/api/v1', bankroute)
// app.use('/api/v1', expenseRoute)
app.use("/", Home)
app.use("/api/v1/user", member)





// app.use('/api/v1',savingroute)
// app.use('/api/v1',bankroute)
// app.use('/api/v1', expenseRoute)
// app.use('/api/v1', incomeRoute)





// app.use('/api/v1/user',transferRoute)







app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 

// app.use("/api/v1/user", member)






const connectToMongoDb = () => {
    mongoose.connect(process.env.MONGOPASS)
        .then(() => {
            console.log("database connected succesfully");
        }).catch((err) => {
            console.log("failed to connect to the database", err)
        })
}
const port = 5500;
app.listen(port, () => {
    console.log('server is running on port' + port)
    connectToMongoDb();
});







