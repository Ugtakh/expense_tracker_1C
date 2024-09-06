const { Router } = require("express");
const { getAllRecord, getInfo } = require("../controllers/record-controller");

const router = Router();

router.route("/info").get(getInfo);
router.route("/").get(getAllRecord);

module.exports = router;
