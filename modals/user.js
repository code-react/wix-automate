const { DataTypes } = require("sequelize");

const db = require("../config/db");

const User = db.define("User", {
  form_id: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },

  phone_number: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
  domain: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
});
module.exports = User;
