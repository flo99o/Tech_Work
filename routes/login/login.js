const connection = require('../../config')
const express = require('express')
const router = express.Router()


router.post('./auth', (req, res)=>{
    const username = req.body.email
    const password= req.body.passeword

    if(username && password === true){
        connection.query(`SELECT * FROM Job.users WHERE`)
    }
})