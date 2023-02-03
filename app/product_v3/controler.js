const db = require ('../../config/mongodb');

const index = (req,res) =>{
    db.colection('product').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error)); 
}

const view = (req,res) =>{
    const {id}= req.params;

    db.colection('product').find({_id:objoectid})
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error)); 
}

module.exports ={
    index
}