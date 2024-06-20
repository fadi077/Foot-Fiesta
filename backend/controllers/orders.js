const userModel=require("../models/User");
const orderModel=require("../models/order");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createOrder=async(req,res)=>{

  

    const {orderItems,totalPrice}=req.body;

  
    const user=await  userModel.findById(req.user.id);

    if(!user) {
        return res.status(404).json({ status: false, message: "User Not Found" });
    }

    if(!user?.shippingAddress){
        return res.status(400).json({ status: false, message: "Users Shipping Address is Required" });
    }

    const order=await orderModel.create({
        user:req.user?.id,
        orderItems:orderItems,
        shippingAddress:user?.shippingAddress,
        totalPrice:totalPrice
    });

    // console.log(order);
    // orderItems.map((order)=>{
    //     return console.log("K :",order.description);
    // })

    const convertedOrders = orderItems.map((order) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: order?.name,
                    description: order?.description,
                },
                unit_amount: order.price * 100,
            },
            quantity: order.quantity
        }
    });

    const session = await stripe.checkout.sessions.create({

        line_items: convertedOrders,
        metadata: {
            orderId: JSON.stringify(order?._id),
        },
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    });

    // res.send({ url: session.url });

    res.status(200).json({
        status:"Success",
        order:order,
        url:session.url
    })

}

module.exports={createOrder}