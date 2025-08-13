import express from "express"
import { deleteProduct, editProduct, getProduct, getProductDetails, setProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.get('/', getProduct)
router.get('/:id', getProductDetails)
router.post('/', setProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

export default router