const Journal = require("../model/journalModel")

// using .save()
// async function submitJournal(req, res) {
//     try {
//         const {
//             content
//         } = req.body
//         const journal = new Journal({
//             content: content
//         })
//         journal.save().then(
//             () => {
//                 res.status(201).json({
//                     data: 'success',
//                     message: 'Content submitted successfully'
//                 })
//             }
//         ).catch(err => {
//             res.status(400).json({
//                 data: 'error',
//                 message: 'Validation Error'
//             })
//         })

//     } catch (error) {
//         res.status(500).json({
//             data: 'error',
//             message: 'Server Error'
//         })
//     }
// }


// using await
async function submitJournal(req, res) {
    try {
      const { content } = req.body;
      const journal = new Journal({ content });
      await journal.save();
      res.status(201).json({
        data: "success",
        message: "Content submitted successfully"
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        res.status(400).json({
          data: "error",
          message: "Validation Error"
        });
      } else {
        res.status(500).json({
          data: "error",
          message: "Server Error"
        });
      }
    }
  }

module.exports = {
    submitJournal
}