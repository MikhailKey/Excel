import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './template';
import {resizeHandler} from './resize';
import {TableSelection} from "@/components/table/Selection";
import {$} from '@/core/dom';
export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
    this.selection = new TableSelection();
  }

  toHTML() {
    return createTable(30)
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event)
    } else if (event.target.dataset.type === 'cell') {
      const $target = $(event.target);
      this.selection.select($target)
    }
  }
}
