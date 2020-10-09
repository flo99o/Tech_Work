const connection = require('../../config')
const express = require('express')
const { route } = require('../admin/admin')
const router = express.Router()


//Compagny can post offers (checked good)
router.post('/createad', (req, res) => {
    const content = req.body
    const compagnyID = 1
    const userID = 3
    connection.query(`INSERT INTO Job.offers (job_name, description_position, prerequisite, location, wage, contract, compagny_id, user_id) VALUES ("${content.job_name}", "${content.desc_position}", "${content.prerequisite}", "${content.location}", "${content.wage}", "${content.contract}", "${compagnyID}", "${userID}")`, (err, resultat) => {
        if (err) {
            console.log(err)
            res.status(500).send('the Compagny Can\'t post an offers')
        } else {
            res.status(200).json(resultat)
        }
    })
})

//Compagnies get offer applications

router.get('offerApplication',(req, res)=>{
    const userID = req.body.userID
    connection.query(`SELECT * FROM Job.application WHERE user_id= "${userID}" `,(err, results)=>{
        if(err){
            console.log('err: ',err)
            res.status(500).send('The compagny didn\t find the application')
        }else{
            res.status(200).json(results)
        }
    })
})


// Compagny can update their offers
router.put('/compagnyUpdateOffer', (req, res) => {

    const details = req.body
    console.log(details)
    connection.query(`UPDATE offers SET title="${details.title}" description="${details.description}" WHERE id =?"${details.id}"`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('The offer has not been updated')
        } else {
            res.status(200).send(results)
        }
    })
})


//Compagny can update their account(infos)
//allpeople can update their indo account 


//Compagny can delete offers (checked good)
router.delete('/deleteOffer/:id', (req, res) => {
    const offerID = req.params.offerID
    connection.query(`DELETE FROM Job.offers WHERE offerID = "${offerID}"`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('This compagny has not delete this offer')
        } else {
            res.status(200).json(results)
        }
    })
})

//Compagny can delete their account (mettre en cascade foreign keys)
router.delete('/deleteCompagny', (req, res) => {
    const compagny_name = req.body.compagny_name

    connection.query(`DELETE Job.compagnies , Job.users FROM Job.compagnies INNER JOIN Job.users ON compagnies.compagny_name = users.compagny_name WHERE compagnies.compagny_name = "${compagny_name}"`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('This has not deleted her informations')
        } else {
            
            res.status(200).json(results)
        }
    })
})


module.exports = router

