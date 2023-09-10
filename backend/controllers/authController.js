import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
        ...req.body,
        password: hash,
      });  

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    res.status(500).json({ error: 'An error occurred.' });
  }
};
export const login = async (req, res, next) => {

  try {
    const { email, password: reqPassword } = req.body;

    if (!email || !reqPassword) {
      res.status(400).json({ error: "Empty fields detected!" });
      return; 
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(403).json({ error: "Invalid Credentials" });
      return; 
    }

    const isCorrect = bcrypt.compareSync(reqPassword, user.password);
    if (!isCorrect) {
      res.status(400).json({ error: "username or password wrong" });
      return; 
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );


    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token)
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
 
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};