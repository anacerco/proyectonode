import { Book } from "../models/bookModel.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los Libros" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json(book);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al obtener el Libro",
        error: error.message,
      });
  }
};

const addBook = async (req, res) => {
  try {
    const { body } = req;

    // Validar datos antes de guardar
    if (!body.name || !body.year || !body.author) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const newBook = new Book(body);
    await newBook.save();

    return res
      .status(201)
      .json({ message: "Libro agregado exitosamente" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        message: "Error al agregar el Libro",
        error: error.message,
      });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedBook = await Book.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json({
      message: "Libro actualizado exitosamente",
      updatedBook,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al actualizar el Libro",
        error: error.message,
      });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json({ message: "Libro eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al eliminar el Libro",
        error: error.message,
      });
  }
};

export {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};