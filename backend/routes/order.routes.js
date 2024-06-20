const express=require("express");
const { createOrder } = require("../controllers/orders");
const { verifyToken } = require("../middleware/jwt_token");

const orderRoutes=express.Router();

orderRoutes.post('/createOrder',verifyToken,createOrder);
// orderRoutes.post('/CreateOrder',createOrder);

module.exports=orderRoutes;