const { Router } = require("express");

const {
  updateCategory,
  getAllCategory,
  createCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/").get(auth, getAllCategory).post(auth, createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
