import mongoose from "mongoose";

export async function main(){
   await mongoose.connect("mongodb://localhost:27017/quizai");
   console.log("db connected");
}

