const connection = require('../../config')
const express = require('express')
const router = express.Router()



// get all details of user
router.get('/userDetails/:userID', (req, res) => {
  const userID = req.params.userID
  connection.query(`SELECT * FROM Job.users WHERE id = ${userID}
   `, (err,results) => {
      if (err) {
          console.log('error: ', err);
          res.status(500).send('Error retrieving offers')
      }else res.status(200).json(results)
  })
})

//  get applied offers
router.get('/offerApplied/:userID', (req, res) => {
  const userID = req.params.userID
  connection.query(`SELECT *, application.first_name AS name  FROM Job.offers
  INNER JOIN Job.compagnies
  ON compagnies.compagnyID = offers.compagny_id
  INNER JOIN Job.users
  ON users.userID = offers.user_id
  INNER JOIN Job.application
  ON application.offer_id = offers.offerID
  WHERE application.user_id = ${userID}
  `, (err,results) => {
      if (err) {
          console.log('error: ', err);
          res.status(500).send('Error retrieving offers')
      }else res.status(200).json(results)
  })
})



// user can update his info
router.put("/updateProfile/:userID", (req, res) => {
  const userID = req.params.userID
  const newDetails = req.body
  console.log(newDetails);
  connection.query("UPDATE Job.users SET ? WHERE users.userID = ? ", [newDetails, userID], (err, results) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send('Profile updated')
    }
  })
})


// user can post their application
router.post('/postApplication',(req, res)=>{
  const content = req.body
   connection.query(`INSERT INTO `)
    
  }
})

//users can delete their account


module.exports = router