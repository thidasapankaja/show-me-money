import { formatNumber } from "../utils/formatNumber";
import { formatDataForTable } from "../utils/formatTable";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface BalanceSheetTableProps {
  headerData: any;
  currentAssetsData: any;
}

export const BalanceSheetTable = ({
  headerData,
  currentAssetsData,
}: BalanceSheetTableProps) => {
  const {columns, data, title} = formatDataForTable(
    headerData,
    currentAssetsData
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (title) {
    return (
      <div className="mt-10 mb-4">
        <p className="text-2xl font-bold text-center text-gray-400">{title}</p>
      </div>
    );
  }

  return (
    <div className="py-3 flex justify-center">
      <table className="border-collapse w-3/5 border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  className={`p-3  text-m text-gray-500 text-center tracking-wide bg-gray-100 border border-gray-200 ${
                    index === 0 ? "w-1/2" : "w-1/4"
                  }`}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, ind) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td
                  className={`p-3 whitespace-nowrap text-sm text-gray-500 border border-gray-200 ${
                    index === 0 ? "w-1/2" : "w-1/4 text-right"
                  } ${
                    table.getRowCount() - 1 === ind
                      ? "font-bold bg-gray-50 border border-gray-200"
                      : ""
                  }`}
                  key={cell.id}
                >
                  {index > 0 && !isNaN(cell.getValue() as number)
                    ? formatNumber(cell.getValue() as number)
                    : flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
