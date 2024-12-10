import mongoose from "mongoose";

const briansListSchema = mongoose.Schema(
    {
    
        category: {
            type: String,

        },
        item: {
            type: String,

        },
        price: {
            type: Number,

        },
        location: {
            type: String,

        },
        name: {
            type: String,

        },
        email: {
            type: String,

        },
        phone: {
            type: Number,

        },
        imageUp: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const BriansList = mongoose.model('briansLists', briansListSchema);