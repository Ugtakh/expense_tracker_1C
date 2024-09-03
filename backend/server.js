const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const userRoutes = require("./routes/user-route");
const authRoutes = require("./routes/auth-routes");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-routes");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
