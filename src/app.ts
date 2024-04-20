import express from "express";
import {favoriteRouter} from './features/favorites';
import { authRouter } from "./features/auth";
import { authMiddleware } from "./middlewares";

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(authMiddleware);
app.use('/favorites', favoriteRouter);




export  {app};