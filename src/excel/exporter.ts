import { Workbook, Buffer, Worksheet } from 'exceljs';
import { Stream } from 'stream';
import { Table } from './table/table';

interface Exporter {
  export(data: any[]): Promise<Buffer>;
}

class BaseExporter implements Exporter {
  protected workbook: Workbook;
  protected stream: Stream;
  protected currentSheet: Worksheet;

  constructor();
  constructor(stream?: Stream) {
    this.workbook = new Workbook();
    if (stream) {
      this.stream = stream;
    }
  }

  export(data: any[]): Promise<Buffer> {
    return this.workbook.xlsx.writeBuffer();
  }

  addSheet(sheetName: string): void {
    const newSheet = this.workbook.addWorksheet(sheetName);
    this.currentSheet = newSheet;
  }

  setActiveSheet(sheetName: string): void {
    let sheet = this.workbook.getWorksheet(sheetName);
    this.currentSheet = sheet;
    if (!sheet) {
      this.addSheet(sheetName);
    }
  }

  writeData(template: Table, data: any[]){
      
  }

  build(): Workbook {
    return this.workbook;
  }
}

export default BaseExporter;
