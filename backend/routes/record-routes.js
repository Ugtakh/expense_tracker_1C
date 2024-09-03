const { Router } = require("express");

const {
  createTransaction, getTransactions
} = require("../controllers/records-controller");

const router = Router();

router.route("/:userId").get(getTransactions);
router.route("/").post(createTransaction);

module.exports = router;
