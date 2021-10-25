import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
