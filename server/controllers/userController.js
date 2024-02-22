const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {
    res.status(200).json({message: "Login Works"})
  }

  async check(req, res) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest());
    }
    res.json(id);
  }
}

module.exports = new UserController();
