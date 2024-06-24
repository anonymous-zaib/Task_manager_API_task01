const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes")
const taskRoute = require("./routes/taskRoutes")

const app = express()

require("dotenv").config();
require("./db")
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoute);
app.use('/tasks', taskRoute);

app.get("/", (req, res)=>{
    res.json({
        message: 'Task Manager API is working.'
    })
})

app.use(bodyParser.json());
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})