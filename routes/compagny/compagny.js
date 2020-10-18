const connection = require("../../config");
const express = require("express");
const router = express.Router();

//Get all offer by compagny (works)
router.get("/getMyOffers/:id", (req, res) => {
  const userID = req.params.id;
  connection.query(
    `SELECT * FROM Job.offers
      INNER JOIN Job.compagnies
      ON compagnies.compagny_name = offers.compagny_name
      INNER JOIN Job.users
      ON users.userID = offers.user_id
          WHERE user_id = ${userID} `,
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

//Compagny can post offers (checked good)
router.post("/createad", (req, res) => {
  const content = req.body;
  console.log(content);
  connection.query(
    `INSERT INTO Job.offers (job_name, description_position, prerequisite, location, wage, contract, compagny_id, user_id, compagny_name) VALUES ("${content.job_name}", "${content.description_position}", "${content.prerequisite}", "${content.location}", "${content.wage}", "${content.contract}", "${content.userID}", "${content.userID}", "${content.compagny_name}")`,
    (err, resultat) => {
      if (err) {
        console.log(err);
        res.status(500).send("the Compagny Can't post an offers");
      } else {
        res.status(200).json(resultat);
      }
    }
  );
});

//Compagnies get offer applications (checked)

router.get("/offerApplication", (req, res) => {
  const userID = req.body.userID;
  connection.query(
    `SELECT * FROM Job.application WHERE user_id= "${userID}" `,
    (err, results) => {
      if (err) {
        console.log("err: ", err);
        res.status(500).send("The compagny didn\t find the application");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// Compagny can update their offers
router.put("/compagnyUpdateOffer", (req, res) => {
  const details = req.body;
  console.log(details);
  connection.query(
    `UPDATE offers SET job_name="${details.job_name}" description_position="${details.description_post}",prerequisite="${details.prerequisite}",wage="${details.wage}",contract="${details.contract}",location="${details.location}" WHERE  offers.compagnyID ="${details.compagnyID}  AND WHERE offers.userID = "${details.userID}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("The offer has not been updated");
      } else {
        res.status(200).send(results);
      }
    }
  );
});

//Compagny can delete offers (works)
router.delete("/deleteOffer/:id", (req, res) => {
  const offerID = req.params.id;
  connection.query(
    `DELETE FROM Job.offers WHERE offerID = "${offerID}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("This compagny has not delete this offer");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//Compagny can delete their account (checked)
router.delete("/deleteCompagny/:compagny_name", (req, res) => {
  const compagny_name = req.params.compagny_name;

  connection.query(
    `DELETE Job.compagnies, Job.users, Job.offers
    FROM Job.users
    INNER JOIN Job.compagnies
    ON users.compagny_name = compagnies.compagny_name
    INNER JOIN Job.offers
    ON users.userID = offers.user_id
    WHERE compagnies.compagny_name = "${compagny_name}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("This has not deleted her informations");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//update a offer
router.put("/updatead/:offerID", (req,res) => {
  const offerID = req.params.offerID
  const newDetails = req.body

  connection.query( "UPDATE Job.offers SET ? WHERE offers.offerID = ?", [newDetails, offerID], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("Profile updated");
    }
  })
})

module.exports = router;
