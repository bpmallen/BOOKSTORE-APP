import express from "express";
import cors from "cors";
import "dotenv/config";
// import job from "./lib/cron.js";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// job.start();
// console.log("Cron job started.");
app.get("/", (req, res) => {
  res.status(200).json();
});
app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});
