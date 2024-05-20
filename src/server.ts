import dotenv from "dotenv";

import express from "express";
import router from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`🚀 server is running in port ${process.env.PORT}`);
});
