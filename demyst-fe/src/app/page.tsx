"use client";
import { useEffect, useState } from "react";
import { BalanceSheetTable } from "../components/BalanceSheetTable";
import { ErrorMessage } from "../components/Error";
import { LoadingIndicator } from "../components/Loading";
import { fetchBalanceSheet } from "../services/api.service";

export default function Home() {
  const [tableData, setTableData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const homeData = await fetchBalanceSheet();

        setTableData(homeData);
      } catch (error) {
        const typedError = error as Error;

        setError(typedError);
        console.error("Error fetching balance sheet:", error);
      }
    };

    fetchData();
  }, []);

  const renderABalanceTable = () => {
    return tableData.Rows.map((row: any, index: number) => {
      if (index === 0) return;
      return (
        <BalanceSheetTable
          key={index}
          headerData={tableData.Rows[0]}
          currentAssetsData={row}
        />
      );
    });
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-400">
          Balance Sheet
        </h1>
      </div>

      {error ? (
        <div className="mt-10 flex justify-center">
          <ErrorMessage error={error.message} />
        </div>
      ) : !tableData ? (
        <div className="flex mt-10 justify-center items-center">
          <LoadingIndicator />
        </div>
      ) : (
        renderABalanceTable()
      )}
    </main>
  );
}
