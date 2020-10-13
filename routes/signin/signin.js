const connection = require('../../config')
const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt');
const router = express.Router()

router.post('/signin', (req, res) => {
  
    const email = 'lilou@gmail.fr'
    const password = 'Password4'
        connection.query(`SELECT * FROM Job.users WHERE  email = "${email}" `, (err, results) => {
            if(err){
                console.log(err)
            }else if (!results[0]){
                console.log('The user don\'t exist')

            }
            const passwordValid = bcrypt.compareSync(password, results[0].password)
            if(!passwordValid){
                console.log('password incorrect')
            }else{
                res.status(200).send({
                    userID: results[0].userID,
                    userType: results[0].userType,
                    email:results[0].email,
                    first_name:results[0].first_name,
                    last_name:results[0].last_name,
                    phone:results[0].phone,
                    description_compagny:results[0].description_compagny,
                    compagny_name: results[0].compagny_name,
                    logo:results[0].logo

                })
            }

            // if (!username || !password) {
            //     return res.status(422).json({ err: "Please add all the fields." })
            // }
            // if (email && password) {
            //     console.log(err)
            //     res.status(200).send({ msg: 'Incorrect password and/or username' })
            // } else {
            //     console.log(results)
            // }
            // if (err) {
            //     console.log('error: ', err)
            //     res.status(500).send('This compagny have not been deleted')
            // } else {

            //     console.log(results)
            // }
        })


    
})





module.exports = router