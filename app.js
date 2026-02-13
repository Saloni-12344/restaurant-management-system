const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/stock";
const MenuItem = require("./models/menuItem.js");


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {

  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});


app.get("/", (req, res) => {
    res.send("Hi, I am root");
  });

  app.get("/testMenu", async (req, res) => {

    let sampleItem = new MenuItem({
      name: "Paneer Butter Masala",
      description: "Creamy tomato gravy",
      price: 250,
      category: "Main Course",
      cuisine: "Indian",
      isVeg: true,
      spiceLevel: 3,
      prepTime: 20
    });
  
    await sampleItem.save();
  
    console.log("sample menu item saved");
    res.send("Menu item saved successfully");
  });
  
  

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

