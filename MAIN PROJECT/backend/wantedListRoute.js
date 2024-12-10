
import express from 'express'
import { WantedList } from './wantedListModel.js';
const router = express.Router();


router.post("/", async (request, response) => {
    console.dir(request.body)
    try {
        if (
            !request.body.item||
            !request.body.name||
            !request.body.phone||
            !request.body.price

        ) {
            return response.status(400).send({
                message: 'Send all required fields: item',
            })
        }

        const wantedlist = await WantedList.create(request.body);

        return response.status(201).send(wantedlist);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

router.get("/", async (request, response) => {
    // console.log("we HEREEEEEEEEEEEEEEEEEE")
    try {
        const wantedlists = await WantedList.find({});
        return response.status(200).json({
            count: wantedlists.length,
            data: wantedlists
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});


router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const wantedlist = await WantedList.findById(id);

        return response.status(200).json(wantedlist);
    } catch (error) {
        console.log(error.message);
        Response.status(500).send({ message: error.message })
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.item
        ) {
            return response.status(400).send({
                message: 'Send all required fields: item',
            });
        }
        const { id } = request.params;

        const result = await WantedList.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'WantedList not found' });
        }
        return response.status(200).send({ message: 'WantedList updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// console.log("we HEREEEEEEEEEEEEEEEEEE")
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await WantedList.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'WantedList not found' });
        }
        return response.status(200).send({ message: 'WantedList deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
export default router;