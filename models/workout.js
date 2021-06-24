const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type needed"
            },
            name: {
                type: String,
                trim: true,
                required: "Name needed"
            },
            duration: {
                type: Number,
                required: "Enter exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, session) => {
        return total + session.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;