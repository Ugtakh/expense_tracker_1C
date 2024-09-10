const { Router } = require("express");
const {
  getAllRecord,
  getInfo,
  getChartData,
} = require("../controllers/record-controller");

const router = Router();

router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").get(getAllRecord);

module.exports = router;
