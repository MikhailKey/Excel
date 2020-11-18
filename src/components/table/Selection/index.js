export class TableSelection {
  static className = 'selected';
  constructor() {
    this.group = [];
    this.currentCell = null;
  }

  clear() {
    if (this.currentCell) {
      this.group = [];
      this.currentCell.removeClass(TableSelection.className)
    }
  } 

  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
    this.currentCell = $el;
  }


}
