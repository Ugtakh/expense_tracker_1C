const sql = require('../config/db');

const createTransaction = async (req, res) => {
  try {
    const { userId } = req.params
    const { categoryId, name, amount, description, transactionType } = req.body;

    await sql`INSERT INTO transactions (userId, categoryId, name, amount, description, transactionType, createdAt, updatedAt) VALUES (${userId}, ${categoryId}, ${name}, ${amount}, ${description}, ${transactionType}, ${new Date()}, ${new Date()})`;

    res.status(201).json({ message: "successfully created transaction" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to create" });
  }
}

const getTransactions = async (req, res) => {
  const { userId } = req.params;
  try {
    const transactions =
      await sql`SELECT transactions.name, transactions.amount, transactions.description, transactions.transactionType, transactions.createdAt, category.name as category_name, category.description as category_description FROM transactions INNER JOIN category ON transactions.categoryId=category.id WHERE transactions.userId=${userId}`;

    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to get transactions" });
  }
}

module.exports = { createTransaction, getTransactions }