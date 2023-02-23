import mongoose from "mongoose";
import dotenv from 'dotenv/config'


const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.a8vgr6j.mongodb.net/Alura-Livros`)

let db = mongoose.connection

export default db