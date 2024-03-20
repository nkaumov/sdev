const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_2024","root", "", {
    dialect: "mysql",
    host: "127.0.0.1",
    logging:  false
});

const User = require('./User')(sequelize);

module.exports = {
    sequelize:sequelize;
    user:User,
}