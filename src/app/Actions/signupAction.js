"use server"

import { connectDB } from "@/Db/connectDB"
import { User } from "@/models/user.model";
import { signupSchema } from "@/utils/userValidations"

export async function SignupAction(_, formData) {


    try {

        connectDB();

        const { success, data, error } = signupSchema.safeParse(formData)

        if (!success) {
            return { success: false, message: "invalid validation" }

        }


        const user = await User.create({
            name: formData.name,
            email: formData.email,
            password: formData.password
        })

        if (!user) {
            return { success: false, message: "can't create account , try again!" }
        }

        return { success: true, message: "account has been created" }



    } catch (error) {

        console.log("SIGN UP ACTION ERROR !!!!!!", error)
        return { success: false, message: "Signup failed, please try again" }

    }


}