import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

const port: number = 8000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
