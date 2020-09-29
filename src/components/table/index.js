import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  
  toHTML() {
    return createTable()
  }
}