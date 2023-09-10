import express from 'express';
import mongoose from 'mongoose'; 
import userRoute from './routes/userRoute.js';
import blogRoute from './routes/blogRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
config();

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
};

app.listen(5000, () => {
    connect();
    console.log('Backend server is running!');
    }   
);

app.use("/backend/users", userRoute);
app.use("/backend/blog", blogRoute); 
app.use("/backend/user_auth", authRoute);

