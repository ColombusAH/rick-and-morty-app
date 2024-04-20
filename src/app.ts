import express from "express";
import {favoriteRouter} from './features/favorites';
import { authRouter } from "./features/auth";

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/favorites', favoriteRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

export  {app};