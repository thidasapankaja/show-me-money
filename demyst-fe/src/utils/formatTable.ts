import { createColumnHelper } from "@tanstack/react-table";
import { Row } from "../types";

export interface TableData {
  firstCol: string | undefined;
  secondCol: string | undefined;
  thirdCol: string | undefined;
}

const columnHelper = createColumnHelper<TableData>();

export function formatDataForTable(header: Row, section: Row) {
  const secondCol = `Balance by ${header.Cells?.[2].Value}`;
  const thirdCol = `Balance by ${header.Cells?.[1].Value}`;

  if(section.Rows.length === 0) {
    return {columns: [], data: [], title: section.Title};
  }

  const tableData: TableData[] = section.Rows.map((row: Row) => {
    if (row.RowType === "Row") {
      const cells = row.Cells;
      return {
        firstCol: cells?.[0].Value,
        secondCol: cells?.[2].Value,
        thirdCol: cells?.[1].Value,
      };
    } else if (row.RowType === "SummaryRow") {
      const cells = row.Cells;
      return {
        firstCol: cells?.[0].Value,
        secondCol: cells?.[2].Value,
        thirdCol: cells?.[1].Value,
      };
    }
    return {firstCol: "", secondCol: "", thirdCol: ""};
  });

  const columns = [
    columnHelper.accessor("firstCol", {
      header: section.Title,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("secondCol", {
      header: secondCol,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("thirdCol", {
      header: thirdCol,
      footer: (info) => info.column.id,
    }),
  ];

  return {columns, data: tableData,};
}
