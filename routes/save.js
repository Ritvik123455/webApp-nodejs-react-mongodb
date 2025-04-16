import express from 'express';
import chartModel from '../models/chartSettings.js';

const router = express.Router();

// POST method is used when we want to save information
router.post('/', async (request, response) => {
    try {
        const input = request.body;

        const newDocument = new chartModel({
            title: input.title,
            description: input.description,
            labels: input.labels,
            colors: input.colors,
            numbers: input.numbers
        });

        await newDocument.save();

        console.log("The chart settings were saved!");
        response.status(200).json({
            message: 'Chart settings were saved',
            success: true
        });

    } catch (err) {
        console.log("ERROR: " + err);
        response.status(500).json({
            message: 'Problems while saving information',
            success: false
        });
    }
});

export default router;
