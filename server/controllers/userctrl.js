const userModel = require('../models/userModels.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const getuser = async(req , res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        if (!user) {
            return res.status(200).json({ message: 'User not found', success: false });
        }
        res.status(200).json({ message: 'User found', success: true, data:{
             name: user.name,
            email: user.email,
        } });
     }
     catch(error){
            console.log(error);
        res.status(500).json({ message: `error : ${error}` });
     }
}


const logincontroller = async(req , res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: 'User not found', success: false });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(200).json({ message: 'Invalid email or password', success: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ message: 'Login successful', success: true, token: token });
     }
    catch(error){
      console.log(error);
      res.status(500).json({ message: `error : ${error}` });
    }
}

// register
const registercontroller = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).json({ message: 'User already exists', success: false });
        }

        // Generate salt with 10 rounds
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(200).json({ message: 'User registered successfully', success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `error : ${error}` });
    }
}

module.exports = {
    logincontroller,
    registercontroller,
    getuser
}
