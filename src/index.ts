import { Table } from './excel/table/table';
import { Workbook } from 'exceljs';

const table = Table.init()
  .defineProperties((config) =>
    config
      .name('MyTable')
      .ref('A1')
      .headerRow(true)
      .totalsRow(true)
      .rows([
        [new Date('2019-07-23'), 71.1],
        [new Date('2019-07-21'), 70.6],
        [new Date('2019-07-22'), 71.1],
      ]),
  )
  .column((col) => col.field('Date'))
  .column((col) => col.field('Amount'));

console.log(table);

const workbook = new Workbook();
const ws = workbook.addWorksheet('My Sheet');
ws.addTable(table);

(async () => {
  await workbook.xlsx.writeFile('test.xlsx');
})();
