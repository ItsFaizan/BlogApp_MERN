import User from "../models/userModel.js";

export const updateuser = async (req, res) => {
    try{
    const user = await User.updateOne(
        {_id:req.params.id},
        {$set:{
            fullName: req.body.fullName,
            email: req.body.email,
            education: req.body.education,
            interests: req.body.interests,
        }})
        if(user){
            res.json(user)
        }
        else{
            res.status(404).json('User not found')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: "Can't update user"})
    }

};    
           
export const getUser = async (req, res) => {
  const userid = req.userid;
  const user = await User.findById(userid);
  res.json({user});
};