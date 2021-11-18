const { printSchema } = require("graphql");

module.exports = () => [printSchema(require("./lib").schema)];
