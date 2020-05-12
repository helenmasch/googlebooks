const router = require("express").Router();
const booksControllers = require("../../booksControllers");

// matches with /api/books
router.route("/")
.get(booksControllers.finalAll)
.post(booksControllers.create);

// matches with /api/books/:id
router
.route("/:id")
.get(booksControllers.findById)
.put(booksControllers.update)
.delete(booksControllers.remove);

module.exports = router;