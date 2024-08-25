import { ApiResponse, BalanceSheetReport } from "@/types";

const API_BASE_URL = "http://localhost:8000";

export const fetchBalanceSheet = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/balance-sheet`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonResponse: ApiResponse<BalanceSheetReport> = await response.json();
    if (!jsonResponse.success) {
      throw new Error("Unable to retrieve data");
    }
    return jsonResponse.data;

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
