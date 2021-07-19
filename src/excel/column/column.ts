import Style from '../style/style';
type ConditionalStyleFunc = (typeClass: any) => Style;
export default class ColumnDefinition {
  private colName: string;
  private displayName: string;
  private columnStyle: Style;
  private conditionalStyle: ConditionalStyleFunc;
  constructor() {}
  field(colName: string): ColumnDefinition {
    this.colName = colName;
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
  getValue(obj: any){
    return obj && obj[this.colName];
  }
}
