const SignupSchema= require("../models/SignupModel")


exports.addDetails = async (req, res) => {
    const {name,username,password,age,profession}  = req.body

    const Signup = SignupSchema({
        name,
        username,
        password,
        age,
        profession
    })

    try {
        //validations
        if(!name || !username || !age || !password || !profession){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(age <= 15 || !age === 'number'){
            return res.status(400).json({message: 'You must be above 15 years old!'})
        }
        await detail.save()
        res.status(200).json({message: 'Details added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(Signup)
}
exports.getSignup = async (req, res) =>{
    try {
        const Signup = await SignupSchema.find().sort({createdAt: -1})
        res.status(200).json(Signup)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}
