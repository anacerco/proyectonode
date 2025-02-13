// inicializar el servidor
import express from "express";
import { bookRouter } from "./routes/bookRoutes.js";
import {connectDB} from "./config/connectDB.js";




const PORT = 3001;
console.log (PORT);

const app = express();
app.use(express.json());

// http://localhost:3001/api/books/
app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log("El servidor está en escucha en el puerto http://localhost:3001");
  connectDB();
});