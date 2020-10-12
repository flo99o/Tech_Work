const connection = require('../../config')
const express = require('express')
const router = express.Router()

// Functionnel routes (tracy)
router.post("/createad", (req, res) => {
  const content = req.body;
  console.log(content);
  connection.query(
    `INSERT INTO Job.offers (job_name, description_position, prerequisite, location, wage, contract, compagny_id, user_id) VALUES ("${content.job_name}", "${content.desc_position}", "${content.prerequisite}", "${content.location}", "${content.wage}", "${content.contract}", "${content.compagnyID}", "${content.userID}")`,
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





module.exports = router

module.exports = router;
