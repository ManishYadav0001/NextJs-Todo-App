import * as z from "zod";

export const signupSchema = z.object({
    name: z.string().min(3, "minimum 3 letters requires").max(10, "name can max upto 10 letters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "password should be atleast 6 letters").max(10, "password can max upto 10 letters")

});

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "password should be atleast 6 letters").max(10, "password can max upto 10 letters")

});