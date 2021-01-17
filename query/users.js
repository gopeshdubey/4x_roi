const Users = require("../model/users");

var ObjectData = {};

ObjectData.register = (name, email, address) => {
  return new Promise(async (res, rej) => {
    try {
      var user_detail = await get_user_by_address(address);

      if (user_detail.length > 0) rej("Already registered");
      else {
        var user_data = await get_last_user();

        var id = user_data.length > 0 ? user_data[0].id + 1 : 1;

        var users = new Users({
          id,
          name,
          email,
          address,
        });

        users.save((err, data) => {
          if (err) rej(err);
          else res(data);
        });
      }
    } catch (error) {
      rej(error);
    }
  });
};

get_last_user = () => {
  return new Promise((res, rej) => {
    Users.aggregate(
      [
        // Sort in descending order
        {
          $sort: {
            id: -1,
          },
        },
        {
          $limit: 1,
        },
      ],
      (err, data) => {
        if (err) rej(err);
        else res(data);
      }
    );
  });
};

get_user_by_address = (address) => {
  return new Promise((res, rej) => {
    Users.find({ address }, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
};

ObjectData.login = async (id) => {
  return new Promise((res, rej) => {
    Users.find({ id }, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
};

module.exports = ObjectData;
