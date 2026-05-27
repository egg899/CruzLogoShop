import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import salesRoutes from "./routes/sales.js";
import productRotes from "./routes/products.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.get("/", (req, res) =>{
    res.send("<h1>Inicio del Servidor para el Bolso Moon</h2>")
});



app.use("/products", productRotes);
app.use("/sales", salesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http:localhost:${PORT}`);
});