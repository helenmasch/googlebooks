const router = require("express").Router();
const googlebooksController = require("../../controllers/googlebooksController");

// Matches with "/api/books"
router.route("/:title")
  .get(googlebooksController.findByTitle)


  module.exports = router;