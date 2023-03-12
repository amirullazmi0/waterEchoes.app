const { Sequelize } = require("sequelize");


const db = new Sequelize('n1607112_db_waterechoes', 'n1607112_amirullazmi', 'Aghniaqil12', {
    host: "https://skripsi-iot-ku.site/",
    dialect: "mysql"
});


export default db;