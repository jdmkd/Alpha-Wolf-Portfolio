import mongoose from "mongoose"

const SkillsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
            
    }
},{timestamps:true})

export const Skill = mongoose.model("Skill", SkillsSchema)