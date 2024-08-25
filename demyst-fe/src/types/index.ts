export interface BalanceSheetReport {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
}

export interface Row {
  RowType: "Header" | "Section" | "Row" | "SummaryRow";
  Title?: string;
  Cells?: Cell[];
  Rows: Row[];
}

export interface Cell {
  Value: string;
  Attributes?: Attribute[];
}

export interface Attribute {
  Value: string;
  Id: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
