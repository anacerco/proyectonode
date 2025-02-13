import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/booksControllers.js";

const bookRouter = Router();

// Obtener todos los Libros
// GET /
bookRouter.get("/", getAllBooks);

// Obtener un Libro mediante su id
// GET /:id
bookRouter.get("/:id", getBookById);

// Agregar un nuevo estudiante
// POST /
bookRouter.post("/", addBook);

// Actualizar un estudiante (parcialmente o completamente)
// PATCH /:id
bookRouter.patch("/:id", updateBook);

// Borrar un estudiante
// DELETE /:id
bookRouter.delete("/:id", deleteBook);

export { bookRouter };
