import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import conntectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

conntectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("express is not able to communicate with database", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit if DB connection fails
  });

// (async () => {
//   try {
//     const intstance = mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("express is not able to communicate with database", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("you have an error connecting the database", error);
//     throw error;
//   }
// })();

// ---------------------------------CHATGPT
// (async () => {
//   try {
//     console.log("Attempting to connect to MongoDB...");

//     // Await the connection
//     const instance = await mongoose.connect(
//       `${process.env.MONGO_URI}/${DB_NAME}`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//     );

//     console.log("✅ Connected to MongoDB successfully!");

//     app.on("error", (error) => {
//       console.error("❌ Express encountered an error:", error);
//     });

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error);
//     process.exit(1); // Exit if DB connection fails
//   }
// })();
