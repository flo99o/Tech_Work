const connection = require('../../config')
const express = require('express')
const router = express.Router()





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
      res.status(200).json(results)
    }
  })
})

// user can update his info
router.put('/')


// users can update their information + password
router.put('/updateUserInfo/:id', (req, res) => {
  const details = req.body
  connection.query(`UPDATE users SET resume="${details.resume}" WHERE =id"${details.id}"`, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).status('The user information have not been updated')
    } else {
      res.status(200).json(results)
    }
  })

})


module.exports = router