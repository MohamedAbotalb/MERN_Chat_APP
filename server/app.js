import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// routes

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5000",
      "http://localhost:4200",
    ],
  })
);
// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening at Port ${PORT}`));
