'usestrict'
const express = require('express');
require('dotenv').config();
const connectDB = require('./db/dbConn');
const {adRouter} = require('./routes/index');
const cors = require('cors')




// initilizing app
const app = express();
const port = process.env.PORT || 3055

app.use(express.json())
app.use(express.urlencoded({extends:false}))
app.use(cors())
app.use(adRouter)




// listening server
app.listen(port,()=>{
    console.log(`Server starting at PORT:-${port}......`)
    connectDB();
})