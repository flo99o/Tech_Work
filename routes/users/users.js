const connection = require('../../config')
const express = require('express')
const { route } = require('../admin/admin')
const router = express.Router()


///////////////////////// GET
router.get('/getLatestjobs', (req, res) => {
    connection.query(`SELECT * FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.id = offers.compagny_id
    INNER JOIN  Job.recruiter
    ON recruiter.id = offers.recruiter_id `, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving offers')
        }else res.status(200).json(results)
    })
})

// user can post his info (checked good)
router.post('/userPost', (req, res) => {
  const content = req.body
  console.log(content)
  connection.query(`INSERT INTO users (first_name, last_name,birth_date,resume,email, password) VALUES ("${content.first_name}","${content.last_name}","${content.birth_date}","${content.resume}","${content.email}","${content.passeword}")`, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Can\'t post this user')
    } else {
      console.log(err)
      res.status(200).send('New user have been posted')
    }
  })
})

// user can update his info
router.put('/')


//users can get all offers
router.get('/userGetOffer', (req, res) => {
  connection.query('SELECT * FROM Job.offers', (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('the user didn\'t get all the offers')
    } else {
      res.send(results)
    }
  })
})



// user can select one offer 
router.get('/userSelectOffer/:id', (req, res)=>{
  const id = req.params.id
  connection.query('SELECT * FROM Job.offers WHERE =? id',id, (err, results)=>{
    if(err){
      console.log(err)
      res.status(500).send('This user didn\'t get this offer')
    }else{
      console.log(results)
      res.status(200).send('This user select this offer.')
    }
  })
})


// users can update their information + password
router.put('/updateUserInfo/:id', (req, res) => {
  const details = req.body
  connection.query(`UPDATE users SET resume="${details.resume}" WHERE =id"${details.id}"`, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).status('The user information have not been updated')
    } else {
      res.status(results)
    }
  })

})


module.exports = router