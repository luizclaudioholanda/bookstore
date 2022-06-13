import mongoose from "mongoose";

mongoose.connect("mongodb+srv://teste:teste123@cluster0.uyhaq.mongodb.net/node-livros");

let db = mongoose.connection;

export default db;