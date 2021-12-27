const express= require ('express')
const { AddContact, GetContact, GetContactById, DeleteContact, UpdateContact } = require('../controllers/contact.js')
const ContactSchema=require ('../models/contact.js')
const contactRoute=express.Router()


//method post 
// req.body 
// /addcontact 
contactRoute.post('/addcontact',AddContact)

//method get
// /
contactRoute.get('/', GetContact)
//get 
// /:id

contactRoute.get('/:id', GetContactById)


//delete contact
// /deletecontact/:id
contactRoute.delete('/deletecontact/:id',DeleteContact)
//put
//req.params req.body 
//updatecontact/:id
contactRoute.put('/updatecontact/:id',UpdateContact)






module.exports=contactRoute 