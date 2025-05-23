import express from "express"
import { connectDB } from "./db/connectdb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: true,
    credentials: true
}));
  
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server is alive!");
});
  

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server is Running on Port:", PORT);
});