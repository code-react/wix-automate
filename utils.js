const db = require("./config/db");
const User = require("./modals/user");
// const logToPostgreSQL = async (level, message, meta) => {
//   try {
//     await db.none(
//       "INSERT INTO winston_logs (level, message, meta, timestamp) VALUES ($1, $2, $3, $4)",
//       [level, message, JSON.stringify(meta), new Date()]
//     );
//     console.log("Log entry saved to PostgreSQL");
//   } catch (error) {
//     console.error("Error saving log entry:", error);
//   }
// };

async function insertDataIntoPostgres(data) {
  try {
    const {
      "form-id": form_id,
      "contact.Name.Last": last_name,
      "field:comp-ljfcawfu": address,
      "field:comp-ljfcakw7": phone_number,
      "contact.Email[0]": email,
      "field:comp-ljfcaecd": domain,
      "field:comp-ljfciw6h": country,
      "field:comp-ljfc5po71": contact_email,
      metaSiteId,
    } = data;
    console.log(
      form_id,
      last_name,
      address,
      phone_number,
      email,
      domain,
      country,
      contact_email,

      " inside the function"
    );

    await User.sync({ force: true });
    const user = await User.create({
      form_id,
      last_name,
      address,
      phone_number,
      contact_email,
      domain,
      email,
      country,
    });
    console.log("user created ", user);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

async function getRowByEmail(email) {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    return user.dataValues;
  } catch (error) {
    console.error("Error executing query:", error);
  }
}

module.exports = {
  insertDataIntoPostgres,
  getRowByEmail,
};
