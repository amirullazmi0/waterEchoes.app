import express from "express";

import {
    LatestSensor,
    // createProduct,
    // getProductById,
    // updateProduct,
    // deleteProduct
} from "../controllers/SensorController";

const router = express.Router();

router.get('/', LatestSensor);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

export default router;