const connection = require('../../config')
const express = require('express')
const router = express.Router()



//Register
router.post('/register',(req, res)=>{
    const content = req.body
    connection.query(`INSERT INTO Job.users(first_name, last_name,password,email, logo, type, compagny_name, phone, description_compagny) VALUES ("${content.first_name}", "${content.last_name}", "${content.password}","${content.email}","${content.logo}", "${content.type}", "${content.compagny_name}", "${content.phone}", "${content.description_compagny}")`, (err, results)=>{
        if(err){
            console.log('err :',err)
            res.status(500).send('The content have not been register')
        }else{
            res.status(200).json(results)
        }
    })
})




//getOffers pour fichier allPeople
router.get("/getoffers", (req, res) => {
    connection.query(
      `SELECT * FROM Job.offers
      INNER JOIN Job.compagnies
      ON compagnies.compagnyID = offers.compagny_id
      INNER JOIN Job.users
      ON users.userID = offers.user_id
      `,
      (err, results) => {
        if (err) {
          console.log("error: ", err);
          res.status(500).send("Error retrieving offers");
        } else res.status(200).json(results);
      }
    );
  });


//getValuesFilter pour le fichier (works)

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

  // Delete an account
  router.delete('/deleteUserAccount/:id', (req, res)=>{
    const userID = 3
    console.log(userID)
    connection.query(`DELETE FROM Job.users WHERE users.userID = "${userID}"`, (err, results)=>{
      if(err){
        console.log('err:  hello', err)
        res.status(500).send('This user have not been deleted')
      }else{
        res.status(200).json(results)
      }
    })
  })
  
  
  // get detail's offer (works)
  router.get("/getOffer/:idJob", (req, res) => {
    const offerID = req.params.idJob;
    connection.query(
      `SELECT * FROM Job.offers
      INNER JOIN Job.compagnies
      ON compagnies.compagnyID = offers.compagny_id
      INNER JOIN Job.users
      ON users.userID = offers.user_id
          WHERE offers.offerID = ${offerID} `,
      (err, resultat) => {
        if (err) {
          console.log(err);
          res.status(500).send("Can't get my offers");
        } else {
          res.status(200).json(resultat);
        }
      }
    );
  }); 

  //all user get his details
  router.get('/userDetails/:userID', (req, res) => {
    const userID = req.params.userID
    connection.query(`SELECT * FROM Job.users WHERE userID = ${userID}
     `, (err,results) => {
        if (err) {
            console.log('error: ', err);
            res.status(500).send('Error retrieving offers')
        }else res.status(200).json(results)
    })
  })



  module.exports = router
