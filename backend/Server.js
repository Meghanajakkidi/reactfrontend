const express = require("express")
app=express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const itemroutes = require("./routes/Item")


app.use("/item",itemroutes)



app.listen(7000,()=>{
    console.log("server is running")
})