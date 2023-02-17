const express = require("express")
const router = express.Router()

const { submitJournal } = require("../controllers/submitJournal")

// router
//     .route("/getAllJournals")
//     .get(getAllJournals)

router  
    .route("/submitJournal")
    .post(submitJournal)

module.exports = router