import express from "express";
import { JobsList } from "./jobsListModel.js";

const router = express.Router();
//? Route for saving new Job
router.post("/", async (req, res) => {
    try {
        if (
            !req.body.company
        ) {
            return response.status(400).send({
                message: 'Send all required fields: company',
            })
        }
        const jobsList = await JobsList.create(req.body);


        return res.status(201).send(jobsList);
    } catch (error) {
        console.log(error.message);
        Response.status(500).send({ message: error.message })
    }

});
//? Route for get all jobs frm datbase
router.get("/", async (req, res) => {
    try {
        const jobsLists = await JobsList.find();
        return res.status(200).json({
            count: jobsLists.length,
            data: jobsLists
        });
    } catch (error) {
        console.log(error.message);
        res.status(599).send({ message: error.message })
    }
});
//? Route for get one job frm datbase by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const jobsList = await JobsList.findById(id);
        return res.status(200).json(jobsList);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});
//?  Route for update a job
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.company ||
            !req.body.logo ||
            !req.body.position ||
            !req.body.role ||
            !req.body.level ||
            !req.body.postedAt ||
            !req.body.contract ||
            !req.body.location ||
            !req.body.languages ||
            !req.body.tools
        ) {
            return res.status(400).send({
                message: 'send all req fields',
            });
        }
        const { id } = req.params;
        const result = await JobsList.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'JobsList not found' });
        }
        return response.status(200).send({ message: 'JobsList updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
//? Route delete a job
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await JobsList.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'JobsList not found' });
        }
        return res.status(200).send({ message: 'JobsList deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
export default router;

