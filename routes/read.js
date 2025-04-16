import express from 'express';
import chartModel from '../models/chartSettings.js';

const router = express.Router();

// routes
router.get('/all', async(request, response)=>{
    try{
        const docs = await chartModel.find();

        console.log("Information fetched successfully!");
        response.status(200).json({
            documents : docs,
            success : true
        })
    } catch (err){
        console.log("ERROR: " + err);
        response.status(500).json({
            message : "Problem when reading information",
            success : false
        });
    }
});

export default router;