import User from "../models/userModel.js";


export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
    if(req.userId !== user._id.toString()){
        return res.status(403).json({error: "You are not allowed to delete this user"})
    }
     await User.findByIdAndDelete(req.params.id);
     res.status(200).send("deleted.");
};

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