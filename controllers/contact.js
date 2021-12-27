const ContactSchema=require('../models/contact')

exports.AddContact=
    async(req,res)=>{
        const{email}=req.body
        try {
            const newContact= new ContactSchema(req.body)
            await newContact.save()
    res.status(200).send({msg :"contact added", newContact})
        } catch (error) {
            res.status(500).send ("couldnot add contact")
            
            
        }
    }
    exports.GetContact= async (req,res)=>{
        try {
            const contacts = await ContactSchema.find()
            res.status(200).send({msg:'list of contacts', contacts})
        } catch (error) {
            res.status(500).send('could not get list of  contacts')
        }
    }
    exports.GetContactById=async(req, res)=>{
        const {id}=req.params
    try {
         const foundcontact=await ContactSchema.findById(id)
        res.status(200).send({msg:' contact is ', foundcontact})
    } catch (error) { 
        res.status(500).send('could not get the contact')
    }
    
}
exports.DeleteContact=async(req,res)=>{
    const{id}=req.params
    try {
        const deletecontact= await ContactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:' contact  deleted ', deletecontact})
    } catch (error) {
        res.status(500).send('could delete the contact')
    }
}
exports.UpdateContact=async (req,res)=> {
    const{id}=req.params
    try {
        const updatecontact=await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})

       res.status(200).send({msg:' contact  updated ', updatecontact})
    } catch (error) {
        res.status(500).send('could update the contact')
    }

}