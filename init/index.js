const mongoose = require("mongoose");
const initData = require("./data.js");
const MenuItem = require("../models/menuItem.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/restaurant";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await initDB();

    console.log("Data initialized successfully");
    await mongoose.connection.close();
    console.log("DB connection closed");
  } catch (err) {
    console.log(err);
  }
}

const initDB = async () => {
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(initData.data);
};

main();
