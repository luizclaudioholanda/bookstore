import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express();

app.use(express.json());

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão realizada com sucesso")
})

routes(app);


export default app;