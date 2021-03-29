const router = require("express").Router();
const Error = require("../util/error");

router.get("/id", (req, res) => {
  res.send(req.session && req.session.user && req.session.user.id);
});

module.exports = router;
