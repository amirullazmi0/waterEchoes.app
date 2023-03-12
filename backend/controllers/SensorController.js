import Sensor from "../models/SensorModel.js";

export const LatestSensor = async (req, res) => {
    try {
        // const sensor = await Sensor.findAll();
        const lastId = await Sensor.max('id');
        const data = await Sensor.findOne({ where: { id: lastId } });
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }
}
