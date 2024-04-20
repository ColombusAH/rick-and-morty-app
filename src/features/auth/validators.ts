import { NextFunction, Request, Response } from "express";
import {z} from 'zod';

export const validateUserCreds = async (req: Request, res: Response, next: NextFunction)  => {
    const { username, password } = req.body;
    const userCreds = z.object({
        username: z.string().min(3),
        password: z.string().min(6)
    });
    try {
        userCreds.parse({ username, password });
        next();
    } catch (error: any) {
        res.status(400).json({ message: error.errors });
    }
}