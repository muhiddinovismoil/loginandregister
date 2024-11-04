import path from "node:path";
import { User } from "../models/index.js";
export const registerController = async (req,res,next) => {
    try {
        const {username,password} = req.body
        const dataExists = await User.findOne({username})
        if(dataExists) {
            return res.send("Email already Taken")
        }
        const user = new User(req.body)
        await user.save()
        res.send({
            message: "created",
            data: user
        });
    } catch (error) {
        next(error)
    }
}
export const loginController = async (req,res,next) => {
    try {
        const {username,password} = req.body
        const user = await User.findOne({username}).select({
            username: 1,
            password:1
        })
        if(!user) return res.send("user not found")
        const isEqual =  await user.compare(password)
        if(!isEqual) return res.send("Email or password is not valid")
        res.send({
            message: "loggedIn",
            data: user,
        })
    } catch (error) {
        next(error)
    }
}
export const getRegisterController = async (req,res,next) => {
    try {
        const htmlFilePath = path.join(process.cwd(),"views","register.ejs")
        res.render(htmlFilePath)
    } catch (error) {
        next(error)
    }
}
export const getLoginController = async (req,res,next) => {
    try {
        const htmlFilePath = path.join(process.cwd(),"views","login.ejs")
        res.render(htmlFilePath)
    } catch (error) {
        next(error)
    }
}