const connection = require('../../config')
const express = require('express')
const { route } = require('../admin/admin')
const router = express.Router()


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


//Compagny can post offers (checked good)
router.post('/compagnyPostOffer', (req, res) => {
    const details = req.body
    connection.query(`INSERT INTO offers (title, description, release_date, limit_date, recruiter_id) VALUES ("${details.title}","${details.description}","${details.release_date}","${details.limit_date}", "${details.recruiter_id}")`, (err, resultat) => {
        if (err) {
            console.log(err)
            res.status(500).send('the Compagny Can\'t post an offers')
        } else {
            res.status(200).json(resultat)
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
router.put('/compagnyUpdateInfo', (req, res) => {
    const details = req.body
    connection.query(`Update compagnies SET title= "${details.title}" description="${details.description}" WHERE id=?`, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('The compagny infos has not been updated')
        } else {
            res.status(200).send(results)
        }
    })
})


//Compagny can delete offers (checked good)
router.delete('/compagnyDeleteOffer/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM Job.offers WHERE id=?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('This compagny has not delete this offer')
        } else {
            console.log(results)
            res.status(200).send('This compagny has deleted this offer')
        }
    })
})


//Compagny can delete their account (mettre en cascade foreign keys)
router.delete('/compagnyDelete/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM Job.compagnies WHERE id=?', id, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send('This has not deleted her informations')

        } else {
            res.send(results)
            res.status(200).send('This compagny has been deleted')
        }
    })
})


module.exports = router

