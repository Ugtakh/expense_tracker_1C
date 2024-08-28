const { Router } = require("express");

const {
  updateCategory,
  getAllCategory,
  createCategory,
  deleteCategory,
} = require("../controllers/category-controller");

const router = Router();

router.route("/").get(getAllCategory).post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
