import { TableColumnProperties } from 'exceljs';
import Style from '../style/style';
type ConditionalStyleFunc = (typeClass: any) => Style;
export default class ColumnDefinition implements TableColumnProperties {
  name: string;
  private displayName: string;
  private columnStyle: Style;
  private conditionalStyle: ConditionalStyleFunc;
  constructor() {}
  filterButton?: boolean | undefined;
  totalsRowLabel?: string | undefined;
  totalsRowFunction?:
    | 'none'
    | 'average'
    | 'countNums'
    | 'count'
    | 'max'
    | 'min'
    | 'stdDev'
    | 'var'
    | 'sum'
    | 'custom'
    | undefined;
  totalsRowFormula?: string | undefined;
  field(name: string): ColumnDefinition {
    this.name = name;
    return this;
  }
  title(displayName: string): ColumnDefinition {
    this.displayName = displayName;
    return this;
  }
  style(style: Style): ColumnDefinition {
    this.columnStyle = style;
    return this;
  }
  styleCondition(style: ConditionalStyleFunc): ColumnDefinition {
    this.conditionalStyle = style;
    return this;
  }
  getValue(obj: any) {
    return obj && obj[this.name];
  }
}
