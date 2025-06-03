import { unstable_noStore as noStore } from "next/cache"
import yahooFinance from "yahoo-finance2"


// FinanceSummary.tsx

type FinanceSummaryResponse = {
  summaryDetail?: {
    open?: number;
    dayHigh?: number;
    dayLow?: number;
    volume?: number;
    trailingPE?: number;
    marketCap?: number;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLow?: number;
    averageVolume?: number;
    dividendYield?: number;
    beta?: number;
    trailingEps?: number;
  };
  defaultKeyStatistics?: {
    beta?: number;
    trailingEps?: number;
    enterpriseValue?: number;
    forwardPE?: number;
    profitMargins?: number;
    // Add other fields that you need
  };
  // Add other sections as needed
  [key: string]: any; // Allow dynamic property access

};

// Your component logic continues below...


export async function fetchQuoteSummary(ticker: string): Promise<FinanceSummaryResponse> {
  noStore()

  try {
    const response = await yahooFinance.quoteSummary(ticker, {
      modules: ["summaryDetail", "defaultKeyStatistics"],
    })

    return response
  } catch (error) {
    console.log("Failed to fetch quote summary", error)
    throw new Error("Failed to fetch quote summary.")
  }
}
