const connection = require('../../config')
const express = require('express')
const router = express.Router()


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


// // user can post their application
router.post('/postApplication', (req, res)=>{
  const content = req.body
  console.log(content)
 connection.query(`INSERT INTO Job.application(first_name, email, cover_letter, phone, last_name,offer_id, user_id) VALUES ("${content.first_name}", "${content.email}", "${content.cover_letter}","${content.phone}", "${content.last_name}", "${content.offer_id}", "${content.user_id}") `,(err, results)=>{
   if(err){
     console.log('err : ' ,err)
     res.status(500).send('The application have not been posted')
   }else{
     res.status(200).json(results)
   }
 })
})


module.exports = router