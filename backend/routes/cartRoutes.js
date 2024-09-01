import { Router } from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.use(authMiddleware); // Apply authentication middleware

router.get("/", getCart); // Retrieve cart for authenticated user
router.post("/add", addToCart); // Add item to cart
router.put("/update", updateCartItem); // Update item quantity in cart
router.delete("/remove", removeFromCart); // Remove item from cart

export default router;
