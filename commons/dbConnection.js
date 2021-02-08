require("dotenv/config");
const { MongoClient } = require("mongodb");

const config = {
  url: process.env.MONGO_URL,
};

async function Connection() {
  const conn = await MongoClient.connect(config.url, { useNewUrlParser: true });

  return {
    client: conn.db(config.dbName),
    closeConnectionFn: () => conn.close(),
    conn,
  };
}

module.exports = Connection;
