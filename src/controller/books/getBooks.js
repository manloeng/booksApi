const connection = require("../../model/connection");

async function getAllBooks(req, res, next) {
  try {
    const sqlQuery = `SELECT * FROM assessment2`;
    const data = await new Promise((resolve, reject) => {
      connection.query(sqlQuery, (err, result) => {
        if (err) {
          reject(new Error());
        } else {
          resolve(result);
        }
      });
    });

    res.send({ data });
  } catch (err) {
    next(err);
  }
}

module.exports = getAllBooks;
