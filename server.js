const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/lunch-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
