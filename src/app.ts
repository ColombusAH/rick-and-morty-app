import express from "express";
import {favoriteRouter} from './features/favorites';

const app = express();
app.use(express.json());

app.use('/favorites', favoriteRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

export  {app};