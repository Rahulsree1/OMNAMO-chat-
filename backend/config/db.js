const mongoose = require("mongoose");
const colors = require("colors");

const url = "mongodb+srv://Rahul:Rahulsree@cluster0.yxdea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

