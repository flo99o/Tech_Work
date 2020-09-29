const connection = require('../../config')
const express = require('express')
const router = express.Router()

// Delete Admin
router.delete('/userDelete/:id',(req, res )=>{
  const id = req.params.id

  connection.query('DELETE FROM Job.users WHERE id=?', id, (err)=>{
      if(err){
          res.status(500).status('This user have not been deleted')         
          
        }else{
          res.status(200).send('The user have been deleted')
          
      }
    
   
  })
 
})

router.delete('/compagnyDelete/:id', (req, res)=>{
    const id = req.params.id
    connection.query('DELETE FROM Job.compagny WHERE = id?',id,(req, results)=>{
        if(err){
            res.status(500).send('This compagny have not been deleted')
        }else{

            res.status(200).send('The compagny have been deleted')
        }
    })
})



module.exports = router