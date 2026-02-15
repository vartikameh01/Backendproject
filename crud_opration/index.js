let express = require('express');
var mongoose = require('mongoose');
const enquiryRoutes = require('"./App/routes/web/enquiryRoutes"');
require('dotenv').config();

// connect to mongodb
let app = express();
app.use(express.json());

app.use("/web/api/enquiry",enquiryRoutes)

//http://localhost:8000/web/api/enquiry/api/enquiry-insert
    mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connect to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log("server is runnig on Port"+ process.env.PORT)
    })
})