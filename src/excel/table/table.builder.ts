import { Table, TableColumnProperties, TableStyleProperties } from 'exceljs'

export default class TableBuilder {
    private readonly table: Table

    name(name: string): this {
        this.table.name = name
        return this
    }

    displayName(displayName: string): this {
        this.table.displayName = displayName
        return this
    }

    ref(ref: string): this {
        this.table.ref = ref
        return this
    }

    headerRow(headerRow: boolean): this {
        this.table.headerRow = headerRow
        return this
    }

    totalsRow(totalsRow: boolean): this {
        this.table.totalsRow = totalsRow
        return this
    }

    style(style: TableStyleProperties): this {
        this.table.style = style
        return this
    }

    columns(columns: TableColumnProperties[]): this {
        this.table.columns = columns
        return this
    }
    
    rows(rows: any[][]): this {
        this.table.rows = rows
        return this
    }

    build(): Table {
        return this.table
    }
}