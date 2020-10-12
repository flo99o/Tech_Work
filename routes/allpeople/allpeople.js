const connection = require('../../config')
const express = require('express')
<<<<<<< HEAD
const { route } = require('../admin/admin')
const router = express.Router()


/**
 * ROUtes functional
 */

// get his own details 
router.get('/myDetails/:userID', (req, res) => {
    const userID = req.params.userID
    connection.query(`SELECT * FROM Job.users WHERE userID = ${userID}`, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving datas')
        }else res.status(200).json(results)
    })
  })


  ///////////////////////////
  module.exports = router
=======
const router = express.Router()




module.exports = router
>>>>>>> 8ca521cdba453f7317baa65f4e4def7bb707ade7
