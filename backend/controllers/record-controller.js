const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const guilgee = await sql`SELECT * FROM records`;
    res.status(200).json({ guilgee });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

module.exports = { getAllRecord, getInfo };
