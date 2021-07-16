import { Table, TableColumnProperties, TableStyleProperties } from 'exceljs'


export default class TableBuilder {
    private readonly table: Table

    name(name: string): TableBuilder {
        this.table.name = name
        return this
    }

    displayName(displayName: string): TableBuilder {
        this.table.displayName = displayName
        return this
    }

    ref(ref: string): TableBuilder {
        this.table.ref = ref
        return this
    }

    headerRow(headerRow: boolean): TableBuilder {
        this.table.headerRow = headerRow
        return this
    }

    totalsRow(totalsRow: boolean): TableBuilder {
        this.table.totalsRow = totalsRow
        return this
    }

    style(style: TableStyleProperties): TableBuilder {
        this.table.style = style
        return this
    }

    columns(columns: TableColumnProperties[]): TableBuilder {
        this.table.columns = columns
        return this
    }
    
    rows(rows: any[][]): TableBuilder {
        this.table.rows = rows
        return this
    }

    build(): Table {
        return this.table
    }
}