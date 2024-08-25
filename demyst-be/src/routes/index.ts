import { Router } from "express";
import balanceSheetRoutes from "./balanceSheet";

const router = Router();

router.use(balanceSheetRoutes);

export default router;