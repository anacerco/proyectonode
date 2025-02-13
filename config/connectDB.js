import mongoose from "mongoose";

const URI_DB = "mongodb://localhost:27017/datatest"

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    console.log("Conexión a la base de datos éxitosa!");
  } catch (error) {
    console.error("error al conectar",error);
    process.exit(1); 
  }
};

export { connectDB };