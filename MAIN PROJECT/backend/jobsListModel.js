import mongoose from "mongoose";

const jobsListSchema = mongoose.Schema(
    {

        company: {
            type: String,

        },
        logo: {
            type: String,

        },
        position: {
            type: String,

        },
        role: {
            type: String,

        },
        level: {
            type: String,

        },
        postedAt: {
            type: String,

        },
        contract: {
            type: String,

        },
        location: {
            type: String,

        },
        languages: {
            type: String,

        },
        tools: {
            type: String,

        },
        imageUp: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const JobsList = mongoose.model('JobsList', jobsListSchema);