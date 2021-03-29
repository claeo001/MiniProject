const router = require("express").Router();

router.use("/account", require("./account"));
router.use("/file", require("./file"));
router.use("/chatting", require("./chatting"));

module.exports = router;
