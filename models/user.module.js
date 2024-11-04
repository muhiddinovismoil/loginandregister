import mongoose from "mongoose"
const UserScheme = mongoose.Schema({
    username: {
        type: "String",
        unique: true,
        require: true,
    },
    password: {
        type:"String",
        unique: true,
        require: true,
        minLength: [8, "Password must be at least 8"],
        maxLength: [16, "Password must be at least 16"],
    }
})
export const User = mongoose.model("user", UserScheme);