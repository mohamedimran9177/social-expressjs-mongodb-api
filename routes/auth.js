const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Create token
const maxAge = 60 * 60 * 24;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

//Register
router.post("/register", async (req, res) => {

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });


        //save user and return respond

        const user = await newUser.save();

        console.log(user);

        const token = createToken(user._id);

        console.log(token);

        res.status(200).json({ user: user._id, token: token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        // finding user
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

         // comparing password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ err: err });
    }
});


module.exports = router;
