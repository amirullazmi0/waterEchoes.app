import Sensor from "../models/SensorModel.js";

export const LatestSensor = async (req, res) => {
    try {
        const sensor = await Sensor.findAll();
        res.json(sensor);
    } catch (error) {
        res.json({ message: error.message });
    }
}
