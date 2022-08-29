import express from 'express';
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct } from '../controller/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js'
const router=express.Router();



//fetch all products
//route get /api/ProductS

router.get('/',getProducts)
router.post('/',protect,admin,createProduct)
router.post('/:id/reviews',protect,createProductReview)
router.get('/top',getTopProducts)
//fetch 1 products
//route get /api/Products/:id
router.get('/:id',getProductById)
router.delete('/:id',protect,admin,deleteProduct)
router.put('/:id',protect,admin,updateProduct)
export default router