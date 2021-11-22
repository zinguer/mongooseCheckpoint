const express = require('express')

const Contact = require('../model/Contact')

const router = express.Router()

//test
router.get('/test' , (req, res)=>{
    res.send('test router') = req.body
})


//add

router.post('/adduser' , (req , res)=>{
    const {name , email , phone} = req.body
    const user = new Contact({name , email , phone})
    user.save()
    .then(user => res.send({'user' : user})) 
    .catch(error => console.log(error))
})

// get 

router.get('/getuser' , (req , res ) => {
    Contact.find()
    .then(user => res.send({'user' : user})) 
    .catch(error => console.log(error))
})
// edit 

router.put('/edituser/:_id' , (req , res)=>{
    const {_id} = req.params 
    const {name , email , phone} = req.body
    Contact.findByIdAndUpdate({_id} , {$set : {name , email , phone}})
    .then(user => res.send({'user edited' : user})) 
    .catch(error => console.log(error))
})

// delete

router.delete('/deleteuser/:_id' , (req , res)=>{
  const {_id} = req.params
    Contact.findByIdAndDelete({_id})
    .then(user => res.send({'user deleted' : user})) 
    .catch(error => console.log(error))


})

module.exports = router