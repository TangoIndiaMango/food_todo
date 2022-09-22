const express = require("express");
const food = require("./databse.js")

const router = express.Router();


router.post("/", async (req, res) => {
    const data = new food(req.body)
    const new_food = await data.save();

    if (!new_food){
        res.status(403).json("Filed not complete")
    }else{
        res.status(201).json({
            status: "success",
            res: new_food
        })
    }
})

router.get("/", async(req, res) => {
    try {
        const data = await food.find();
        if (data){
            res.status(200).json({
                status: "success",
                data: data
            })
        }
        else
            res.status(404).json({
                status: "no data found"
            })
        
    } catch (error) {
        res.status(500).json({
            status: "false"
        })
    }
})

router.get("/:id", async(req, res) => {
    const _id = req.params.id
    const result = await food.findById(_id)
    try {
        if(!result){
            res.status(403).json({
                status: "failed"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                data: result
            })
        }
        
    } catch (error) {
        res.status(500).json(
            error.message
        )
        
    }
})

router.put("/:id", async(req, res) => {
    const _id = req.params.id
    const result = await food.findOneAndUpdate({_id}, req.body, {new: true})
    try{
        if(!result){
            res.status(403).json({
                status: "failed"
            })
        } else {
            res.status(200).json({
                status: "success",
                data: result
            })
        }
    } catch (error){
        res.status(500).json(error.message)
    }
})

router.delete("/:id", async(req, res) => {
    const _id = req.params.id;
    const result = await food.findByIdAndRemove(_id)
    try{
        if(!result){
            res.status(403).json({
                status: "failed"
            })
        } else {
            res.status(200).json({
                status: "deleted successfully"
            })
        }
    } catch (error){
        res.status(500).json(error.message)
    }
})



module.exports = router;