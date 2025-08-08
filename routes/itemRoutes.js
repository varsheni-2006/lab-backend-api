const express = require('express');
const router = express.Router();
const Item = require('../models/item');
//create
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
       const newItem=new Item(req.body);
       await newItem.save();
       res.status(201).json(newItem);
    }catch(err){
        res.status(400).json({message: err.message});

    }
});
router.get('/',async(req,res)=>{
    try{
        const items = await Item.find();
        res.json(items);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});
router.put('/:id',async(req,res)=>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedItem);
    }
catch(err){
    res.status(400).json({message: err.message});
}
});

router.delete('/:id',async(req,res)=>{
    try{
        await Item.findByIdAndDelete(req.params.id);
        res.json({message: "Item deleted successfully"});
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
});
module.exports = router;