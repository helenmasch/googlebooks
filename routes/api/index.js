const router = require("express").Router();
const bookRoutes = require("./books");
const googlebookRoutes = require("./googlebooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/googlebooks", googlebookRoutes);


module.exports = router;
