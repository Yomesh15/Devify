import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./ConnectDB/connectDB.js";
import contactRoutes from "./Routes/Contact.route.js";
import login from "./Routes/User.route.js"
import register from "./Routes/User.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.get("/",(req,res)=>{
  res.send("Hello")
})

connectDB();

/* Routes */
app.use("/api", contactRoutes);
app.use("/api", login);
app.use("/api", register);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
