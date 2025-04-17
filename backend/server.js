require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://williamjames:Williamjames%4042@cluster0.tzftxdt.mongodb.net/GigDatabase?retryWrites=true&w=majority&appName=Cluster0");
const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log("Connected to database"));

const memberRouter = require("./router/Router");
app.use('/gigfloww/members', memberRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`));
/*
.env:
DATABASE_URL = mongodb+srv://williamjames:Wiliamjames%4042@cluster0.tzftxdt.mongodb.net/workers-data?retryWrites=true&w=majority&appName=Cluster0
PORT = 5000

workers/workersData.js:
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    email: {type: String, required: true},
    skill_category: {type: String, required: true},
    portfolio: {type: String, required: true}
});

module.exports = mongoose.model('workers-data', memberSchema);

router/Router.js:
const express = require('express');
const router = express.json();
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

Is everything fine here?*/