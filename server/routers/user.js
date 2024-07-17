const express = require('express');
const { logincontroller, registercontroller , getuser } = require('../controllers/userctrl');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/login", logincontroller);
router.post("/register", registercontroller);
router.post("/getUserData" , authMiddleware , getuser);

module.exports = router;
