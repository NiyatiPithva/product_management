import express, { json } from "express";
import cors from "cors";

import catRouter from "./routes/categoryRoute.js";
import productRouter from "./routes/productRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/",catRouter);
app.use("/",productRouter);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})