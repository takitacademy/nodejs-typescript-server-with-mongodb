import { Request, Response } from "express";
import logger from "../utils/logger"
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response){
    try {
        //call create user service
        const user = await createUser(req.body);
        return user;
    } catch (error) {
        logger.error(error)
        return res.status(409).send(error.message)
    }
}