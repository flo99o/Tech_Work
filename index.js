const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000
//MySql
const connection = require('./')

app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`))

//Testttt