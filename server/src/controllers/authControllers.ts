import { userModel } from "../models/User";
import { userDetailsTypes } from "./types";

export async function createUserController(userDetails: userDetailsTypes) {
  try {
    const user = await userModel.create(userDetails);
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


// export async function encryptPassword(password:string) {
//     const saltRounds = 10;
//     return 
    
// }