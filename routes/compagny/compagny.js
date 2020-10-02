const connection = require('../../config')
const express = require('express')
const { route } = require('../admin/admin')
const router = express.Router()


//Compagny can post offers (checked good)
router.post('/compagnyPostOffer', (req, res)=>{
    const details = req.body
    connection.query(`INSERT INTO offers (title, description, release_date, limit_date, recruiter_id) VALUES ("${details.title}","${details.description}","${details.release_date}","${details.limit_date}", "${details.recruiter_id}")`,(err,resultat) => {
        if (err) {
            console.log(err)
            res.status(500).send('the Compagny Can\'t post an offers')
        } else {
            res.status(200).json(resultat)
        }
    })
})

// Compagny can update their offers
router.put('/compagnyUpdateOffer',(req, res)=>{
  
    const details = req.body
    console.log(details)
    connection.query(`UPDATE offers SET title="${details.title}" description="${details.description}" WHERE id =?"${details.id}"`,(err, results)=>{
        if(err){
            console.log(err)
            res.status(500).send('The offer has not been updated')
        }else{
            res.status(200).send(results)
        }
    })
})


//Compagny can update their account(infos)


//Compagny can delete offers


//Compagny can delete their account


module.exports = router

