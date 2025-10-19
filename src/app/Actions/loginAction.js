"use server"
import { connectDB } from "@/Db/connectDB";
import { User } from "@/models/user.model";
import { loginSchema } from "@/utils/userValidations"
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
    try {
        await connectDB();

        const { success, data, error } = loginSchema.safeParse(formData);

        if (!success) {
            return { success: false, message: "validation error " }
        }

        const user = await User.findOne({ email: formData.email })

        if (!user) {
            return { success: false, message: "user not exist " }
        }

        const validPass = await user.isPasswordCorrect(formData.password)

        if (!validPass) {
            return { success: false, message: "invalid password" }
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "dsaghqogwnhp2420822ignsv",
            { expiresIn: "7d" }
        );

        const cookieStore = await cookies();
        cookieStore.set("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: "/",
        })

        // Return a safe, plain user object without sensitive fields
        const safeUser = {
            id: String(user._id),
            name: user.name,
            email: user.email
        }

        return { success: true, message: "user logged in successfully", user: safeUser }




    } catch (error) {
        console.log("LOGIN ACTION ERROR!!!!", error)
        return { success: false, message: "Login failed, please try again" }
    }

}