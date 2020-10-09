const connection = require('../../config')
const express = require('express')
const router = express.Router()

//getOffers pour fichier allPeople

router.get('/getOffers', (req, res) => {
    connection.query(`SELECT * FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.compagnyID = offers.compagny_id
    `, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving offers')
        }else res.status(200).json(results)
    })
})


//getValuesFilter pour le fichier allPeople

router.get('/getValuesFilter', (req, res) => {
    connection.query(`SELECT DISTINCT offers.job_name, compagnies.compagny_name, offers.location FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.compagnyID = offers.compagny_id`, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving datas')
        }else res.status(200).json(results)
    })
  })



  module.exports = router
