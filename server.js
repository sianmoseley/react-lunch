const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/lunch-cart-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const Meal = mongoose.model(
  "meals",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
  })
);

app.get("/api/meals", async (req, res) => {
  const meals = await Meal.find({});
  res.send(meals);
});

app.post("/api/meals", async (req, res) => {
  const newMeal = new Meal(req.body);
  const savedMeal = await newMeal.save();
  res.send(savedMeal);
});

app.delete("/api/meals/:id", async (req, res) => {
  const deletedMeal = await Meal.findByIdAndDelete(req.params.id);
  res.send(deletedMeal);
});

const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      name: String,
      email: String,
      additionalInfo: String,
      cartItems: [
        {
          _id: String,
          title: String,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

app.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.additionalInfo ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required." });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send(order);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
