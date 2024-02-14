import { DocumentDefinition } from "mongoose"; 
import userModel, {userDocument} from "../models/user.model";

export async function createUser(input:DocumentDefinition<userDocument>) {
    try {
        return await userModel.create(input);
    } catch (error) {
        throw new Error(error)
    }
}