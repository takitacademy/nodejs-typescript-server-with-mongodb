import {TypeOf, object, string} from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "password too short"),
        confirmPassword: string({
            required_error: "password confirmation is required"
        }),
        email: string({
            required_error: "email is required",
        }).email("not a valid email"),
        }).refine((data) => data.password === data.confirmPassword , {
            message: "password do not match",
            path: ["confirmPassword"],
        }
    ),
});

export type CreateUserInput = TypeOf <typeof createUserSchema>