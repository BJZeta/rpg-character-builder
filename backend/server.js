import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});