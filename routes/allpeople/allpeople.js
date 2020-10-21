const connection = require("../../config");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

//Register (works)
 
router.post("/register", (req, res) => {
  const content = req.body;
  const password = bcrypt.hashSync(content.password);
  console.log(req.body);
  //requête for compagny
  if (content.compagny_name) {
    console.log('compagny');
    connection.query(
      `INSERT INTO Job.users(first_name, last_name,password,email, logo, type, compagny_name, phone, description_compagny) VALUES ("${content.first_name}", "${content.last_name}", "${password}","${content.email}","${content.logo}", "${content.userType}", "${content.compagny_name}", "${content.phone}", "${content.description_compagny}")`,
      (err, results) => {
        if (err) {
          console.log("err :", err);
          res.status(500).send("The content have not been register");
        } else {
          console.log("user has been register");
        }
      }
    );
    console.log('compagny');
    connection.query(
      `INSERT INTO Job.compagnies SELECT users.userID, users.compagny_name FROM Job.users WHERE userID = LAST_INSERT_ID()`
    );
  } //requête for others users 
  else {
    console.log('user');
    connection.query(
      `INSERT INTO Job.users(first_name, last_name,password,email, logo, type, phone) VALUES ("${content.first_name}", "${content.last_name}", "${password}","${content.email}","${content.logo}", "${content.userType}", "${content.phone}")`,
      (err, results) => {
        if (err) {
          console.log("err :", err);
        } else {
          console.log("user has been register");
        }
      }
    );
  }
  connection.query(
    `SELECT * FROM Job.users WHERE email = "${content.email}"`,
    (err, results) => {
      if (err) {
        console.log("err :", err);
      } else {
        res.status(200).send({
          userID: results[0].userID,
          userType: results[0].type,
          isLogged: true,
          compagny_name: results[0].compagny_name
        });
      }
    }
  );
});

//getOffers pour fichier allPeople (works)
router.get("/getoffers", (req, res) => {
  connection.query(
    `SELECT * FROM Job.offers
      INNER JOIN Job.compagnies
      ON compagnies.compagny_name = offers.compagny_name
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

router.get("/getValuesFilter", (req, res) => {
  connection.query(
    `SELECT DISTINCT offers.job_name, compagnies.compagny_name, offers.location FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.compagnyID = offers.compagny_id`,
    (err, results) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send("Error retrieving datas");
      } else res.status(200).json(results);
    }
  );
});

// Delete an account (works)
router.delete("/deleteUserAccount/:id", (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  connection.query(
    `DELETE FROM Job.users WHERE users.userID = "${userID}"`,
    (err, results) => {
      if (err) {
        console.log("err:  hello", err);
        res.status(500).send("This user have not been deleted");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// get detail's offer (works)
router.get("/getOffer/:idJob", (req, res) => {
  const offerID = req.params.idJob;
  console.log('offerID:', offerID)
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

//all user get his details (works)
router.get("/userDetails/:userID", (req, res) => {
  const userID = req.params.userID;
  connection.query(
    `SELECT * FROM Job.users WHERE userID = ${userID} 
     `,
    (err, results) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send("Error retrieving offers");
      } else res.status(200).json(results);
    }
  );
});

////////////////////////////////// UPDATE

// all users can update his info (works)
router.put("/updateProfile/:userID", (req, res) => {
  const userID = req.params.userID;
  if(req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password)
  }
  const newDetails = req.body 
  connection.query(
    "UPDATE Job.users SET ? WHERE users.userID = ? ",
    [newDetails , userID],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

module.exports = router;
