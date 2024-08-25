export interface BalanceSheetResponse {
  Status: string;
  Reports: BalanceSheetReport[];
}

interface BalanceSheetReport {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
}

interface Row {
  RowType: string;
  Cells?: Cell[];
  Title?: string;
  Rows?: Row[];
}

interface Cell {
  Value: string;
  Attributes?: Attribute[];
}

interface Attribute {
  Value: string;
  Id: string;
}
