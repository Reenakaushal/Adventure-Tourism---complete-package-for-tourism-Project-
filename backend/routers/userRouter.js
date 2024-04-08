const express = require('express');
const Model = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/add', (req, res) => {
    // req.body is the formdata provided by client
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            const payload = { _id: result._id, email: result.email, role: result.role };

            // create jwt token
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '3 days' },
                (err, token) => {
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                    }else{
                        res.status(200).json({ token: token, avatar: result.avatar });
                    }
                }
            )
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }).catch((err) => {
       console.log(err);
       res.status(500).json(err); 
    });
})

module.exports = router;