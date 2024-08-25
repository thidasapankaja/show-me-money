import { Request, Response, Router } from "express";
import { XERO_API_URL } from "../constants";
import { BalanceSheetResponse } from "../types";

const router = Router();

router.get("/balance-sheet", async (req: Request, res: Response) => {
  try {
    console.log(" XERO_API_URL : ", XERO_API_URL);
    const response = await fetch(
      `${XERO_API_URL}/api.xro/2.0/Reports/BalanceSheet`
    );
    const data: BalanceSheetResponse = await response.json();
    res.status(200).json({
      success: true,
      data: data.Reports[0],
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.log("Error fetching balance sheet: ", error);
    res.status(500).json({
      success: false,
      message: "Error fetching balance sheet",
      data: error,
    });
  }
});

export default router;
