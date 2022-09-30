const OrderModel = require("../models/OrderModel.js")
const express = require("express")
const jwt = require("jsonwebtoken");


const router = express.Router()


router.post("/add", async (req, res) => {
    // console.log(req.body)
    
    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
            OrderModel.create({
                order: req.body.order,
                email: user,
                
            }).then(() => {
                    res.status(200).send(`order added successfully`);
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
        
    

});

router.get("/getall", (req, res)=> {
    // console.log(req.body)
    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    OrderModel.find({email: user}).then((userData)=> {
        if(userData.length) {
            res.status(200).send(userData[0].order)
        }else{
            res.status(400).send("No orders")
        }
    })
});



module.exports = router