import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const SensorModel = db.define('sensors', {
    value1: {
        type: DataTypes.DOUBLE
    },
    value2: {
        type: DataTypes.DOUBLE
    },
    value3: {
        type: DataTypes.DOUBLE
    },
    value4: {
        type: DataTypes.DOUBLE
    },
    value5: {
        type: DataTypes.DOUBLE
    },

}, {
    freezeTableName: true
});

export default SensorModel;