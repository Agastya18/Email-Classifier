import express from "express";
import dotenv from "dotenv";
import passport from 'passport';
import session from 'express-session';
import  cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import './config/passportConfig.js';
dotenv.config();
const PORT= process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true,cookie:{secure:false} }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }

));


app.use('/auth', authRoutes);


// app.get("/", (req, res) => {
//     res.send("Server is ready");
// })

app.listen(PORT, () => {
  console.log(`Server is running on port $ http://localhost:${PORT}`);
});