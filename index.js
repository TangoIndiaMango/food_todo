const express = require("express");
require("dotenv").config();
require("./connectDB/conn");
const routes = require("./router");


const app = express();
const port = 5000;

app.use(express.json());

app.use(routes);


app.listen(port, () =>{
    console.log(`SERVER STARTED at ${port}`)
})


/*
todo app

- create a todo
- update that todo
- delete the todo
- get all todos
- get a single todo

--database--
name -
date_time to eat
status -
timestamp.now
*/