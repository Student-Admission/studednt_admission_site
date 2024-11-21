const express = require('express');
const { logincontroller, registercontroller, getuser } = require('../controllers/userctrl');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/login", logincontroller);
router.post("/register", registercontroller);
router.post("/getUserData", auth, getuser);

module.exports = router;
