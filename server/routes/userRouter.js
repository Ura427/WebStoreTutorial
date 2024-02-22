const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);
router.use("/test", (req,res) => {res.status(200).json({message: "Works"})})

module.exports = router;
