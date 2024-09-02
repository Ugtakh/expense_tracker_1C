const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};

const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  await sql`
  INSERT INTO users (email, name, password, profile_img)
  VALUES(${email}, ${name}, ${password},${profile_img});
  `;
  res.status(201).json({ message: "New use created successfully" });
};

const updateUser = () => { };

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM employees WHERE eid=${id}`;
  res.status(200).json({ message: "delete success", user: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
