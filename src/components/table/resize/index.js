import {$} from '@/core/dom'

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const columnCells = $root.findAll(`[data-col="${$parent.data.col}"]`);
  const type = $resizer.$el.dataset.resize;
  let value;
  document.onmousemove = e => {
    $resizer.css({ opacity: 1 })
    if (type === 'row') {
      $resizer.$el.classList.add('resize-active__row');
      const delta = Math.floor(e.pageY - coords.bottom);
      value = coords.height + delta;
      $resizer.css({ top: `${value}px` });
    } else {
      $resizer.$el.classList.add('resize-active__col');
      const delta = Math.floor(e.pageX - coords.right);
      value = coords.width + delta;
      $resizer.css({ left: `${value}px` });
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null;
    $resizer.$el.classList.remove('resize-active');
    $resizer.$el.style = null;
    if (type === 'row') {
      $resizer.$el.classList.remove('resize-active__row')
      $parent.css({ height: `${value}px` })
    } else {
      $resizer.$el.classList.remove('resize-active__col')
      $parent.css({ width: `${value}px` })
      columnCells.forEach(cell => cell.style.width = value + 'px')
    }
    document.onmouseup = null;
  }
}