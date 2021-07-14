import {Workbook, Buffer} from "exceljs";

interface Exporter {
    export(data: any[]): Promise<Buffer>;
}
 
class BaseExporter implements Exporter{
    protected workbook: Workbook;
    
    constructor(){
        this.workbook = new Workbook();
    }

    export(data: any[]): Promise<Buffer> {
        return this.workbook.xlsx.writeBuffer();
    }

    build() : Workbook{
        return this.workbook;
    }

}

export default BaseExporter;