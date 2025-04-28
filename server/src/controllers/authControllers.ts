import bcrypt from "bcrypt";
import { userModel } from "../models/User";
import { userDetailsTypes } from "./types";

export async function encryptPassword(password: string) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function createUserController(userDetails: userDetailsTypes) {
  try {
    const hashedPassword = await encryptPassword(userDetails.password);

    const user = await userModel.create({
      ...userDetails,
      password: hashedPassword,
    });

    return {
      success: true,
      data: user,
    };
  } catch (error: any) {
    console.error("Error creating user:", error);

    return {
      success: false,
      message:
        error.message ||
        "An unexpected error occurred while creating the user.",
    };
  }
}


export function createJwt(userDetails:userDetailsTypes){

  

}