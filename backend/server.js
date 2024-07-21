import express from "express";
import dotenv from "dotenv";
import passport from 'passport'
import path from 'path';
import session from 'express-session';
import  cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import './config/passportConfig.js';
import emailRoutes from './routes/emailRoutes.js';
dotenv.config();
const PORT= process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true,cookie:{secure:false} }));
app.use(passport.initialize());
app.use(passport.session());


app.use(cors(
    {
        origin: 'https://email-classifier-lc2v.onrender.com',
        methods: ['GET', 'POST'],
        credentials: true
    }

));




app.use('/auth', authRoutes);
app.use('/emails', emailRoutes);


// app.get("/", (req, res) => {
//     res.send("Server is ready");
// })


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
  console.log(`Server is running on port $ http://localhost:${PORT}`);
});