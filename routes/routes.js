const express = require("express")
const router = express.Router()

router
    .route("/getAllJournals")
    .get(getAllJournals)

router  
    .route("/submitJournal")
    .post(submitJournal)    

module.exports = router