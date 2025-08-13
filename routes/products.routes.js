import express from "express"
import { deleteProduct, editProduct, getProduct, setProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.get('/', getProduct)
router.post('/', setProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

export default router