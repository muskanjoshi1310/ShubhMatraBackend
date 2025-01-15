import express from "express";
import { getAllProducts, updateProduct, deleteProduct, getProductByName, createProduct, getAllProductsByCategory} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add",createProduct);

router.get("/all", getAllProducts);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id" , deleteProduct);

router.get("/get/:productName", getProductByName);

router.get("/all/:catName", getAllProductsByCategory);

export default router;
