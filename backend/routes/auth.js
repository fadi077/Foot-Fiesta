const router=require("express").Router();
const authcontroller=require('../controllers/auth')

router.post('/signup',authcontroller.createUser);
router.post('/login',authcontroller.loginUser);

module.exports=router;