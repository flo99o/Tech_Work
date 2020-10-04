const connection = require('../../config')
const express = require('express')
const router = express.Router()



//   USERS

//Admin can get all users (checked good)
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM Job.users', (err, results) => {
        if (err) {
            res.status(500).send('Don\'t find all users')
        } else {
            res.send(results)
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
            res.send(results)

        }
    })
})

//Admin can update users infos (checked good) + password

router.put('/userinfo',(req, res)=>{
    const info = req.body
    //password
    connection.query(`UPDATE users SET email="${info.email}" WHERE id="${info.id}"`,(err)=>{
        if(err){
            console.log(err)
            res.status(500).send('The new details have not been update')
        }else{
            res.status(200).send('The new details have been updated')
        }
    })
})

//Admin can delete an user (checked good)
router.delete('/userDelete/:id', (req, res) => {
    const id = req.params.id

    connection.query('DELETE FROM Job.users WHERE id=?', id, (err, resultat) => {
        if (err) {
            res.status(500).send('This user have not been deleted')

        } else {
            console.log(resultat)
            res.status(200).send('The user have been deleted')

        }
    })
})


//     OFFERS

//Admin can get all offers (checked good)
router.get('/offers', (req, res) => {
    connection.query('SELECT * FROM Job.offers', (err, results) => {
        if (err) {
            res.status(500).send('Didn\'T find all offers')
        } else {
            res.send(results)

        }
    })
})

//Admin can add an offers (checked good)
router.post('/offers', (req, res) => {
    const content = req.body
  
    console.log(content)
    connection.query(`INSERT INTO offers (title, description, release_date, limit_date, recruiter_id, compagny_id ) VALUES ("${content.title}","${content.description}","${content.release_date}","${content.limit_date}", "${content.recruiter_id}")`, (err,resultat) => {
        if (err) {
            console.log(err)
            res.status(500).send('Can\'t post an offers')
        } else {
            res.status(200).json(resultat)
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
         res.status(200).send('This offers has been deleted')
     }
 })
})

//      COMPAGNIES


//Admin can delete Compagny (checked good)
router.delete('/compagnyDelete/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM Job.compagnies WHERE id =?', id, (err) => {
        if (err) {
            console.log(err)
            res.status(500).send('This compagny have not been deleted')
        } else {

            res.status(200).send('The compagny have been deleted')
        }
    })
})


module.exports = router