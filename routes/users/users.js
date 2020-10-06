const connection = require('../../config')
const express = require('express')
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

module.exports = router