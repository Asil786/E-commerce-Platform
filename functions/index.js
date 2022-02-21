const functions = require("firebase-functions");
const express = require("express");  // npm i express
const cors = require("cors");    // npm i cors
const stripe = require("stripe")  ("sk_test_51KNGocSCTgrJaWLIIlFtsY3oMvPZBaWrdkXhNuL6mwE0ohTFYtkJAL9Kpzgwsbx219snMFxoXeSEWyKFvV0MzVHc00IzbwzNWM");  // npm i stripe 

// API


// - App config (Setting up Express Server)
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, Response) => Response.status(200).send('hello World'));
app.post('/payment/create', async(request, response) => {
    const total = request.query.total;
    console.log("Total Payment Recieved>>>", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, // In Paise Value not in Rupees
        currency: "inr",
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app);

// - In cmd firebase emulators:start
// - Endpoint -> http://localhost:5001/clone-25eda/us-central1/api