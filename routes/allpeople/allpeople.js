const connection = require('../../config')
const express = require('express')
const router = express.Router()


// allpeople can select one offer 
router.get('/allPeopleSelectOffer/:id', (req, res)=>{
    const id = req.params.id
    connection.query('SELECT * FROM Job.offers WHERE id= ?',id, (err, results)=>{
      if(err){
        res.status(500).send(err)
      }else{
          console.log(results)
        res.status(200).send('this user select this offer.')
      }
    })
  })




module.exports = router