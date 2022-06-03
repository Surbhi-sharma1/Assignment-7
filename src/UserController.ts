import e, { Request, response, Response } from 'express';
import fs from 'fs/promises';
import { User } from '../public/user';
import { pool } from './queries.js';
import Queries from './database.service.js';


class UserController {

    public async getAll(req: Request, res: Response) {
        try {
            const result = await Queries.getQuery();
            return res.json(result);
        }
        catch (error) {
            response.status(500).json({ error: error.message })
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
            const result = await Queries.getQueryById(+req.params.id);
            res.json(result.rows[0]);
        }
        catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
    public async createUser(req: Request, res: Response) {
        try {
            const result = await Queries.CreateQuery(req.body);
            res.json(result);
        }
        catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
    public async updateUser(req: Request, res: Response) {
        try {
            const result = await Queries.updateQuery(req.body);
            res.json(result.rows[0]);
        } catch (error) {
            response.status(500).json({ error: error.message })
        }


    }
    public async deleteUser(req: Request, res: Response) {
        try {
            const result = await Queries.deleteQuery(+req.params.id);
            res.json(result.rows[0]);
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}
export const userController = new UserController();
