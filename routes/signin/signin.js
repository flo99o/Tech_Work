const connection = require("../../config");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/signin", (req, res) => {
  const email = req.body.email;
  console.log("email:", email);

  const password = req.body.password;
 
  connection.query(
    `SELECT * FROM Job.users
    LEFT JOIN Job.compagnies
    ON compagnies.compagny_name = users.compagny_name WHERE  email = "${email}" `,
    (err, results) => {
      if (err) {
        console.log(err);
      } else if (!results[0]) {
        console.log("The user don't exist");
      }
      const passwordValid = bcrypt.compareSync(password, results[0].password);
      if (!passwordValid) {
        console.log("password incorrect");
      } else {
        console.log("Welcome");
        res.status(200).send({
          userID: results[0].userID,
          userType: results[0].type,
          email: results[0].email,
          first_name: results[0].first_name,
          last_name: results[0].last_name,
          phone: results[0].phone,
          description_compagny: results[0].description_compagny,
          compagny_name: results[0].compagny_name,
          logo: results[0].logo,
          isLogged: true,
          compagnyID: results[0].compagnyID
        });
      }
    }
    
  );
});

module.exports = router;
