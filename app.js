const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const MenuItem = require("./models/menuItem.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/restaurant"; 
const methodOverride = require("method-override");


// =======================
// EJS SETTINGS
// =======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// IMPORTANT (form data read karega)
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));


// =======================
// DB CONNECTION
// =======================
main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// =======================
// HOME
// =======================
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// =======================
// INDEX ROUTE (All foods)
// =======================
app.get("/menu", async (req, res) => {
  const allMenuItems = await MenuItem.find({});
  res.render("menu/index.ejs", { allMenuItems });
});

// =======================
// NEW ROUTE (Form page)
// =======================
app.get("/menu/new", (req, res) => {
  res.render("menu/new.ejs");
});

// =======================
// CREATE ROUTE (Insert food)
// =======================
app.post("/menu", async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.redirect("/menu");
});

// EDIT Route
app.get("/menu/:id/edit", async (req, res) => {
  const { id } = req.params;
  const item = await MenuItem.findById(id);
  res.render("menu/edit.ejs", { item });
});

// Update Route
app.put("/menu/:id", async (req, res) => {
  let { id } = req.params;
  await MenuItem.findByIdAndUpdate(id, req.body);
  res.redirect(`/menu/${id}`);
});

// Delete Route
app.delete("/menu/:id", async (req, res) => {
  let { id } = req.params;
  let deletedItem = await MenuItem.findByIdAndDelete(id);
  console.log(deletedItem);
  res.redirect("/menu");
});



// =======================
// SHOW ROUTE (One food)
// =======================
app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const item = await MenuItem.findById(id);
  res.render("menu/show.ejs", { item });
});

// =======================
// SERVER
// =======================
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
