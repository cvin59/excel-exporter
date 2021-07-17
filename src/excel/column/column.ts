import Style from '../style/style';
type ConditionalStyleFunc<T> = (typeClass: T) => Style;
class ColumnBuilder<T> {
  private fieldName: string;
  private displayName: string;
  private columnStyle: Style;
  private conditionalStyle: ConditionalStyleFunc<T>;
  constructor() {}
  field(fieldName: string): ColumnBuilder<T> {
    this.fieldName = fieldName;
    return this;
  }
  title(displayName: string): ColumnBuilder<T> {
    this.displayName = displayName;
    return this;
  }
  style(style: Style): ColumnBuilder<T> {
    this.columnStyle = style;
    return this;
  }
  styleCondition(style: ConditionalStyleFunc<T>): ColumnBuilder<T> {
    this.conditionalStyle = style;
    return this;
  }
}
