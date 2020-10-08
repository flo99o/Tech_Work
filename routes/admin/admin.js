const connection = require('../../config')
const express = require('express')
const router = express.Router()




//Admin can get all users (checked good)
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM Job.users', (err, results) => {
        if (err) {
            res.status(500).send('Don\'t find all users')
        } else {
            res.send(results)
        }
    })
})

// Admin get user by id (checked good)
router.get('/user/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM Job.users WHERE id=?', id, (err, results) => {
        if (err) {
            res.status(500, 'Don\t find the user')
        } else {
            res.send(results)

        }
    })
})

// get all compagnies
router.get('/compagnies', (req, res) => {
    
    connection.query('SELECT compagny_name, compagnies.id AS id FROM Job.compagnies', (err, results) => {
        if (err) {
            console.log('error: ',err);
            res.status(500, 'Don\t find the user')
        } else {
            res.status(200).json(results)

        }
    })
}) 

//Admin can update users infos (checked good) + password

router.put('/userinfo',(req, res)=>{
    const info = req.body
    //password
    connection.query(`UPDATE users SET email="${info.email}" WHERE id="${info.id}"`,(err)=>{
        if(err){
            console.log(err)
            res.status(500).send('The new details have not been update')
        }else{
            res.status(200).send('The new details have been updated')
        }
    })
})

//Admin can delete an user (checked good)
router.delete('/userDelete/:id', (req, res) => {
    const id = req.params.id

    connection.query('DELETE FROM Job.users WHERE id=?', id, (err, resultat) => {
        if (err) {
            res.status(500).send('This user have not been deleted')

        } else {
            console.log(resultat)
            res.status(200).send('The user have been deleted')

        }
    })
})


//     OFFERS

//

//Admin can get all offers (checked good)

// List of offers display on AdminProfile page
router.get('/usersForAdmin', (req, res) => {
    connection.query(`SELECT offers.title, offers.type, compagnies.compagny_name  FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.id = offers.compagny_id
    INNER JOIN  Job.recruiter
    ON recruiter.id = offers.recruiter_id  `, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving offers')
        }else res.status(200).json(results)
    })
})

//Admin can add an offers (checked good)


//Admin can delete an offer (casscade)
router.delete('/offerDelete/:id',(req, res)=>{
    const id = req.params.id
 connection.query('DELETE FROM Job.offers WHERE id =?', id,(err, results)=>{
     if(err){
         res.status(500).send('This offer has not been deleted')
     }else{
         res.send(results)
         res.status(200).send('This offers has been deleted')
     }
 })
})

//      COMPAGNIES


//Admin can delete Compagny (checked good)
router.delete('/compagnyDelete/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM Job.compagnies WHERE id =?', id, (err) => {
        if (err) {
            console.log(err)
            res.status(500).send('This compagny have not been deleted')
        } else {

            res.status(200).send('The compagny have been deleted')
        }
    })
})

/////////////////////////////////////////////////////////  
router.post('/offers', (req, res) => {
    const content = req.body
    console.log('content: ', content)
    console.log('title: ', content.title)


    connection.query (`INSERT INTO Job.offers (job_name, compagny_name,description_compagny, description_position,recruiter_name, location, wage, contract, logo) VALUES ("${content.job_name}", "${content.compagny_name}", "${content.desc_compagny}", "${content.desc_position}", "${content.supervisor}", "${content.location}", "${content.wage}", "${content.contract}", "${content.logo}")`, (err, results) => {
        if(err) { 
            console.log(err);
            return res.status(500).send('The recipe has not been saved to favorite list')
        } else {
            res.status(200).send('the recipe has been saved to favorite list')
        }
    })  
})  
 

module.exports = router