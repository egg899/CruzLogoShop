import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import salesRoutes from "./routes/sales.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

//connectDB();

app.get("/", (req, res) =>{
    res.send("<h1>Inicio del Servidor para el Bolso Moon</h1>");
});

app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});