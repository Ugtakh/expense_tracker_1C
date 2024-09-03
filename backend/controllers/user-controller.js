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

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM employees WHERE eid=${id}`;
  res.status(200).json({ message: "delete success", user: data });
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const [user] = await sql`SELECT name, email, avatarImg FROM users WHERE id=${userId}`

    if (!user || user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      id: userId,
      name: user.name,
      email: user.email,
      avatarImg: user.avatarimg,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getAllUser, createUser, deleteUser, getUserProfile };
