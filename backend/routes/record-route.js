const { Router } = require("express");
const {
  getAllRecord,
  getInfo,
  getChartData,
  createRecord,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").get(getAllRecord).post(createRecord);

module.exports = router;
