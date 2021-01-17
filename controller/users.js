const users = require("../query/users");
const response = require("../response/response");

var object_data = {};

object_data.register = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const register_data = await users.register(
        name, email, address
    );
    response(res, 200, true, "Success", register_data);
  } catch (error) {
    response(res, 400, false, "Error", error);
  }
};

object_data.login = async (req, res) => {
  try {
    const { id } = req.body;
    var login_data = await users.login(id);
    response(res, 200, true, "Success", login_data);
  } catch (error) {
    response(res, 400, false, "Error", error);
  }
};

module.exports = object_data;