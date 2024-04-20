import express from "express";
import {favoriteRouter} from './features/favorites';
import { authRouter } from "./features/auth";
import { authMiddleware } from "./middlewares";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



const app = express();
app.use(express.json());

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Rick and Morty AP',
      version: '1.0.0',
    },
  };
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./**/*.ts'],
  };


const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  

app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(authMiddleware);
app.use('/api/favorites', favoriteRouter);






export  {app};