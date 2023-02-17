const mongoose = require("mongoose")

let date = new Date()

date.toLocaleDateString

const journalSchema = mongoose.Schema({
    createdAt: {
        type: String,
        default: `Date: ${(new Date).toLocaleDateString()} Time: ${(new Date).toLocaleTimeString()} ${(new Date).getTimezoneOffset()}`
    },
    content: {
        type: String,
        required: [true, "Must have some content in order to Post"],
        minLength: [5, "Not enough content to save"],
        maxlength: [500, "Sleep bro thats enough"]
    }
},
{
    versionKey: false 
})

module.exports = mongoose.model("Journal", journalSchema)