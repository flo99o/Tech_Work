const connection = require("../../config");
const express = require("express");
const router = express.Router();

/**
 * Routes functionnal
 */

//////////////////////GET/////////////////////////

//all offers
router.get("/offers", (req, res) => {
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

//all user (only user type)
router.get("/users", (req, res) => {
  connection.query(
    'SELECT * FROM Job.users WHERE users.type = "user"',
    (err, results) => {
      if (err) {
        res.status(500).send("Don't find all users");
      } else {
        res.send(results);
      }
    }
  );
});

//all compagnies
router.get("/compagnies", (req, res) => {
  connection.query("SELECT * FROM Job.compagnies ", (err, results) => {
    if (err) {
      res.status(500).send("Don't find all compagnies");
    } else {
      res.send(results);
    }
  });
});

//Admin can get all users (checked good)

// Admin get user by id (checked good)
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM Job.users WHERE id=?", id, (err, results) => {
    if (err) {
      res.status(500, "Don\t find the user");
    } else {
      res.send(results);
    }
  });
});

//Admin can update users infos (checked good) + password

router.put("/userinfo", (req, res) => {
  const info = req.body;
  //password
  connection.query(
    `UPDATE users SET email="${info.email}" WHERE id="${info.id}"`,
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("The new details have not been update");
      } else {
        res.status(200).send("The new details have been updated");
      }
    }
  );
});

//Admin can delete an user (checked good)
router.delete("/userDelete/:id", (req, res) => {
  const id = req.params.id;

  connection.query("DELETE FROM Job.users WHERE id=?", id, (err, resultat) => {
    if (err) {
      res.status(500).send("This user have not been deleted");
    } else {
      console.log(resultat);
      res.status(200).send("The user have been deleted");
    }
  });
});

//     OFFERS

//

//Admin can get all offers (checked good)

// List of offers display on AdminProfile page
router.get("/usersForAdmin", (req, res) => {
  connection.query(
    `SELECT offers.title, offers.type, compagnies.compagny_name  FROM Job.offers
    INNER JOIN Job.compagnies
    ON compagnies.id = offers.compagny_id
    INNER JOIN  Job.recruiter
    ON recruiter.id = offers.recruiter_id  `,
    (err, results) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send("Error retrieving offers");
      } else res.status(200).json(results);
    }
  );
});

//Admin can add an offers (checked good)

//Admin can delete an offer (casscade)
router.delete("/offerDelete/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM Job.offers WHERE id =?", id, (err, results) => {
    if (err) {
      res.status(500).send("This offer has not been deleted");
    } else {
      res.send(results);
      res.status(200).send("This offers has been deleted");
    }
  });
});

//      COMPAGNIES

//Admin can delete Compagny (checked good)
router.delete("/compagnyDelete/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM Job.compagnies WHERE id =?", id, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("This compagny have not been deleted");
    } else {
      res.status(200).send("The compagny have been deleted");
    }
  });
});

//
router.post("/register", (req, res) => {
  const content = req.body;
  connection.query(
    `INSERT INTO Job.users(first_name, last_name,password,email, logo, type, compagny_name, phone, description_compagny) VALUES ("${content.first_name}", "${content.last_name}", "${content.password}","${content.email}","${content.logo}", "${content.type}", "${content.compagny_name}", "${content.phone}", "${content.description_compagny}")`,
    (err, results) => {
      if (err) {
        console.log("err :", err);
        res.status(500).send("The content have not been register");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

/////////////////////////////////////////////////////////

module.exports = router;
