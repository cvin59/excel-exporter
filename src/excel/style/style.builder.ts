import { Alignment } from 'exceljs';
import Style from './style';

export default class StyleBuilder {
  private style: Style;
  constructor() {
    this.reset();
  }

  reset(): void {
    this.style = new Style();
  }

  font(fontName: string): StyleBuilder {
    this.style.fontName = fontName;
    return this;
  }

  size(fontSize: number): StyleBuilder {
    this.style.fontSize = fontSize;
    return this;
  }

  bold(isBold: boolean = true): StyleBuilder {
    this.style.isBold = isBold;
    return this;
  }

  underline(isUnderline: boolean = true): StyleBuilder {
    this.style.isUnderline = isUnderline;
    return this;
  }

  background(backgroundColor: string): StyleBuilder {
    this.style.backgroundColor = backgroundColor;
    return this;
  }

  foreground(foregroundColor: string): StyleBuilder {
    this.style.foregroundColor = foregroundColor;
    return this;
  }

  align(alignment: Alignment){
    this.style.alignment = alignment;
    return this;
  }

  build(): Style {
    return this.style;
  }
}
