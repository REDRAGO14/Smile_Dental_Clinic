const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const DB_URL = process.env.DB_URL;
exports.DB = async () => {
  await mongoose
    .connect(DB_URL)
    .then(() => console.log("db connected successfully✅"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};
