import express from "express";
import { BriansList } from "./Model.js";

const router = express.Router();
//? Route for saving new Job
router.post("/", async (req, res) => {
    try {
        if (
            !req.body.category
        ) {
            console.log('fell into error')
            return res.status(400).send({
                message: 'send all feilds'
            })
        }
        const newBriansList = {
            ...req.body
        }
        // console.dir(await req.body);
        const briansList = await BriansList.create(newBriansList);

        return res.status(201).send(briansList);
    } catch (error) {
        console.log(error.message);
        Response.status(500).send({ message: error.message })
    }

});
//? Route for get all jobs frm datbase
router.get("/", async (req, res) => {
    try {
        const briansLists = await BriansList.find({});
        return res.status(200).json({
            count: briansLists.length,
            data: briansLists
        });
    } catch (error) {
        console.log(error.message);
        res.status(599).send({ message: error.message })
    }
});
//? Route for get one briansList frm datbase by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const briansList = await BriansList.findById(id);
        return res.status(200).json(briansList);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});
// //?  Route for update a briansList
// router.put('/:id', async (req, res) => {
//     try {
//         if (
//             !req.body.category ||
//             !req.body.item ||
//             !req.body.price ||
//             !req.body.location ||
//             !req.body.name ||
//             !req.body.email ||
//             !req.body.phone

//         ) {
//             return res.status(400).send({
//                 message: 'send all req fields',
//             });
//         }
//         const { id } = req.params;
//         const result = await BriansList.findByIdAndUpdate(id, request.body);
//         if (!result) {
//             return response.status(404).json({ message: 'BriansList not found' });
//         }
//         return response.status(200).send({ message: 'BriansList updated successfully' });
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });
//? Route delete a BriansList
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BriansList.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'BriansList not found' });
        }
        return res.status(200).send({ message: 'BriansList deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
export default router;

