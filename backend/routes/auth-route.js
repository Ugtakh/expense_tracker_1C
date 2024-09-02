const { Router } = require("express");
const { signUp, signIn } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
