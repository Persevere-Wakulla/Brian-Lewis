import express from "express";
import mongoose from "mongoose";
import Route from './Route.js';
import wantedListRoute from './wantedListRoute.js';
import jobsListRoute from './jobsListRoute.js';
import userRoute from "./userRoutes.js"
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to BriansList')
});
app.use('/briansLists', Route);
app.use('/wantedLists', wantedListRoute);
app.use('/jobsLists', jobsListRoute);
app.use('/profile', userRoute);
mongoose.connect('mongodb://127.0.0.1/BriansList').then(() => {
    app.listen(3000, () => console.log("Server running on http://localhost:3000'"));
});