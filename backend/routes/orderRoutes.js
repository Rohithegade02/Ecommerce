import express from 'express';
import { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid } from '../controller/orderController.js';
import { protect,admin } from '../middleware/authMiddleware.js';
const router=express.Router();




router.route('/').post(protect,addOrderItems)
router.route('/').get(protect,admin,getOrders)
router.route('/myorders').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)



export default router