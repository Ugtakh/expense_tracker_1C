const sql = require("../config/db");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await sql`SELECT email FROM users WHERE email=${email}`;
    if (userExist.length > 0) {
      return res.status(400).json({ message: 'User already exist' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await sql`INSERT INTO users(email, name, password, avatarImg, createdAt, updatedAt)
    VALUES(${email}, ${name}, ${hashedPassword}, 'img', ${new Date()}, ${new Date()});`
    res.status(200).json({ message: 'successfully created user' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await sql`SELECT * FROM users WHERE email=${email}`
    if (findUser.length === 0) {
      return res.status(400).json({ message: 'User does not exist' })
    }

    const checkPassword = bcrypt.compare(password, findUser[0].password)
    if (!checkPassword) {
      return res.status(400).json({ message: 'Password does not match' })
    }

    // const accessToken = jwt.sign({ userId: findUser[0].id, email: findUser[0].email }, secretKey, { expiresIn: '10h' })

    res.status(201).json({ message: 'successfully logged in' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { signUp, signIn };
