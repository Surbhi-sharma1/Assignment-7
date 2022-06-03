import e, { Request, response, Response } from 'express';
import fs from 'fs/promises';
import { User } from '../public/user';
import { pool } from './queries.js';
class Queries {
    static async getQuery() {
        try {
            const query = 'SELECT * FROM users ORDER BY id ASC';
            const result = await pool.query(query);
            return result.rows;
        }
        catch {
            throw Error;

        }
    }

    static async CreateQuery(user: User) {
        try {
            const query = 'INSERT INTO users(id,firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)'
            const result = await pool.query(query, [
                user.id,
                user.firstName,
                user.middleName,
                user.lastName,
                user.email,
                user.phone,
                user.role,
                user.address
            ]);
            return result.rows;
        }
        catch {
            throw Error;

        }
    }
    static async deleteQuery(id: number) {
        try {
            const query = 'DELETE FROM users WHERE id = $1';
            const result = pool.query(query, [id]);
            return result;
        }
        catch {
            throw Error;

        }
    }
    static async updateQuery(user: User) {
        try {
            const query = 'UPDATE users SET firstname = $1, middlename = $2, lastname = $3, email = $4, phone = $5, role = $6, address = $7 WHERE id = $8'
            const result = pool.query(query,
                [user.firstName,
                user.middleName,
                user.lastName,
                user.email,
                user.phone,
                user.role,
                user.address,
                user.id]);
            return result;
        }
        catch {
            throw Error;

        }
    }
    static async getQueryById(id: number) {
        try {
            const query = 'SELECT * FROM users WHERE id = $1';
            const result = pool.query(query, [id]);
            return result;
        }
        catch {
            throw Error;

        }
    }

}
export default Queries;