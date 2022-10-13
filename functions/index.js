const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LrG2jSArgQ6LZmQ0DTXifKx1DXkPezBvK7LscTeosLmje2MZ8H7DGVlheBRxK3m19cp3PabP57SGH6iAY7lbidO00g1v0JAbm"
);

//Api

// App config

const app = express();

//middleware

app.use(cors({ orgin: true }));
app.use(express.json());
//api routes

app.get("/", (request, response) => response.status(200).send("hello world"));
// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Resquest Recieved !! for this amount >>> ", total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });
//   response.status(201).send({
//     clientSecret: paymentIntent.client_Secret,
//   });
// });
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    metadata: { integration_check: "accept_a_payment" },
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-project-6063b/us-central1/api
