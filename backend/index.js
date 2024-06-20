const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const errorHandler = require('./middleware/errorHandler');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const bestsellerRouter = require('./routes/bestseller');
const orderRoutes = require('./routes/order.routes');
const orderModel=require("./models/order");
const cors=require("cors")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); //to integrate stripe using webhook
const app = express()
const port = 3000

app.use(cors());
// app.use(express.json({limit: "10mb"}));

// app.use(express.urlencoded({limit: "10mb", extended: true}))

// Stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =process.env.ENDPOINTSECRET;

app.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {

  const sig = request.headers['stripe-signature'];

  let event;

  try {

    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

  } catch (err) {
    console.log("Err :", err.message);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    console.log('inner from webhook');
    //update the order
    const session = event.data.object;
    const { orderId } = session.metadata;
    const paymentStatus = session.payment_status;
    const paymentMethod = session.payment_method_types[0];
    const totalAmount = session.amount_total;
    const currency = session.currency;

    const order = await orderModel.findByIdAndUpdate(
      JSON.parse(orderId),
      {
        $set: {
          totalPrice: totalAmount / 100,
          paymentMethod: paymentMethod,
          paymentStatus: paymentStatus,
          currency: currency
        }
      },
      {
        new: true
      }
    );

    console.log("Order Detail :", order);


  } else {
    return;
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();

});

app.use(express.json())

app.get('/success',(req,res)=>{

    res.send("Payment Successfull");
})

mongoose.connect(process.env.MONGODB,{})
.then(() => console.log("database connected"))
.catch((error) => console.log(error))



app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/', authRouter);
app.use('/api/orders',orderRoutes)
app.use('/api/products', productRouter);
app.use('/api/bestsellers', bestsellerRouter);

app.use(errorHandler);

app.listen(process.env.PORT || port, () => console.log(`server running on port ${process.env.PORT}!`))