const { Router } = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  getUserProfile
} = require("../controllers/user-controller");
const { verifyToken } = require("../middlewares/verify-token");

const router = Router();

router.route("/").get(getAllUser).post(createUser);
router.get('/profile', verifyToken, getUserProfile)
router.route("/:id").delete(deleteUser);

module.exports = router;
