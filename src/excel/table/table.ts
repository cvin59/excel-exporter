import TableBuilder from './table.builder';

export default class Table {
    builder(): TableBuilder {
        return new TableBuilder()
    }
}