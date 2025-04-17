const express = require('express');
const router = express.Router();
const workersData = require('../workers/workersData');

router.post('/signup', async(req,res)=>{
    try{
        const { Name, email, skill_category, portfolio } = req.body;

        if(!Name || !email || !skill_category || !portfolio){
            return res.status(400).json({message: "Missing required fields"});
        }

        const newWorker = new workersData({Name, email, skill_category, portfolio});
        await newWorker.save();

        console.log(newWorker);
        res.status(201).json({message: "Gig workers data saved successfully!"});
    } catch(err){
        console.error("Error in saving Gig workers data: ", err);
        res.status(500).json({message: 'server error', error_details: err});
    }
});

module.exports = router;