const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//Update user
router.put("/:id", verify, async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString()
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, { $set: req.body }, { new: true }
            )
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You cannot update other's account")
    }
})

//Delete User
router.delete("/:id", verify, async(req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You cannot delete other's account")
    }
})

//GET single user
router.get("/find/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
