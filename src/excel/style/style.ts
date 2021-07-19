import { Alignment } from 'exceljs';

export default class Style {
  fontName: string;
  fontSize: number;
  isBold: boolean;
  isUnderline: boolean;

  backgroundColor: string;
  foregroundColor: string;

  alignment: Alignment;
  constructor() {}
}
