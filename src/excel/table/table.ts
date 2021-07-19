import { TableStyleProperties } from 'exceljs';
import ColumnDefinition from '../column/column';

type ColumnDefineFunc = (input: ColumnDefinition) => ColumnDefinition;
type TableBuilderFunc = (input: TableBuilder) => TableBuilder;

export class Table {
  name: string;
  displayName: string;
  ref: string;
  headerRow: boolean;
  totalsRow: boolean;
  style: TableStyleProperties = {
    theme: 'TableStyleDark3',
    showRowStripes: true,
  };
  columns: ColumnDefinition[] = [];
  rows: any[][];

  constructor() {}

  static init(): Table {
    return new Table();
  }

  column(colDefinitionFunc: ColumnDefineFunc) {
    const colDefinition = colDefinitionFunc.call(null, new ColumnDefinition());
    this.columns.push(colDefinition);
    return this;
  }

  defineProperties(tableBuilderFunc: TableBuilderFunc): Table {
    tableBuilderFunc.call(null, new TableBuilder(this));
    return this;
  }
}

export class TableBuilder {
  private readonly table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  name(name: string): this {
    this.table.name = name;
    return this;
  }

  displayName(displayName: string): this {
    this.table.displayName = displayName;
    return this;
  }

  ref(ref: string): this {
    this.table.ref = ref;
    return this;
  }

  headerRow(headerRow: boolean): this {
    this.table.headerRow = headerRow;
    return this;
  }

  totalsRow(totalsRow: boolean): this {
    this.table.totalsRow = totalsRow;
    return this;
  }

  style(style: TableStyleProperties): this {
    this.table.style = style;
    return this;
  }

  rows(rows: any[][]): this {
    this.table.rows = rows;
    return this;
  }
}
