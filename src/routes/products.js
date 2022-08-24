import { Router } from "express";
const router = Router();

router.get("/products/add", (req, res) => {
    res.render("products/new-product.hbs")
});

export default router;