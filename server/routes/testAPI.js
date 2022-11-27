import express  from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).json("The connection was successful")
});

export default router;