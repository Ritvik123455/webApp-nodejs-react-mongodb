import express from 'express';

const router = express.Router();

// routes
router.get('/', (request, response)=>{
    response.send("<h1>Hello from read.js</h1>")
});

export default router;