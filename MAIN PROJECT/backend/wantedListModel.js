import mongoose from "mongoose";

const wantedListSchema = mongoose.Schema(
    {
        item: {
            type: String,
            required: true,
        },
        name: {
            type:String,
            required:true,
        },
        phone: {
            type:Number,
            required:true,
        },
        price: {
            type:Number,
            required:true,
        }


    },
    {
        timestamps: true,
    }
);

export const WantedList = mongoose.model('wantedList', wantedListSchema);