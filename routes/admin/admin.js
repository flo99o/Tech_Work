const connection = require('../../config')
const express = require('express')
const router = express.Router()



//   USERS

//Admin can get all users (checked good)
router.get('/getUsers', (req, res) => {
    connection.query('SELECT * FROM Job.users', (err, results) => {
        if (err) {
            res.status(500).send('Don\'t find all users')
        } else {
            res.status(200).json(results)
        }
    })
})

// Admin get user by id (checked good)
router.get('/user/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM Job.users WHERE id=?', id, (err, results) => {
        if (err) {
            res.status(500, 'Don\t find the user')
        } else {
            res.status(200).json(results)

        }
    })
})

//Admin can update users infos (checked good) + password

router.put('/userinfo',(req, res)=>{
    const info = req.body
    //password
    connection.query(`UPDATE users SET email="${info.email}" WHERE id="${info.id}"`,(err, results)=>{
        if(err){
            console.log(err)
            res.status(500).send('The new details have not been update')
        }else{
            res.status(200).json(results)
        }
    })
})

//Admin can delete an user (checked good)
router.delete('/userDelete/:id', (req, res) => {
    const id = req.params.id

    connection.query('DELETE FROM Job.users WHERE id=?', id, (err, results) => {
        if (err) {
            res.status(500).send('This user have not been deleted')

        } else {
            res.status(200).json(results)

        }
    })
})


//     OFFERS

//Admin can get all offers (checked good)
router.get('/getOffers', (req, res) => {
    connection.query('SELECT * FROM Job.offers', (err, results) => {
        if (err) {
            res.status(500).send('Didn\'T find all offers')
        } else {
            res.status(200).json(results)

        }
    })
})

//Admin can add an offers (checked good)
router.post('/offers', (req, res) => {
    const content = req.body
  
    console.log(content)
    connection.query(`INSERT INTO offers (title, description, release_date, limit_date, recruiter_id, compagny_id ) VALUES ("${content.title}","${content.description}","${content.release_date}","${content.limit_date}", "${content.recruiter_id}")`, (err,results) => {
        if (err) {
            console.log(err)
            res.status(500).send('Can\'t post an offers')
        } else {
            res.status(200).json(results)
        }
    })
})

//Admin can delete an offer (casscade)
router.delete('/offerDelete/:id',(req, res)=>{
    const id = req.params.id
 connection.query('DELETE FROM Job.offers WHERE id =?', id,(err, results)=>{
     if(err){
         res.status(500).send('This offer has not been deleted')
     }else{
         res.send(results)
         res.status(200).json(results)
     }
 })
})

//      COMPAGNIES


//Admin can delete Compagny (checked good)
router.delete('/compagnyDelete/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM Job.compagnies WHERE id =?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('This compagny have not been deleted')
        } else {

            res.status(200).json(results)
        }
    })
})


module.exports = router