import './scss/index.scss';
import { Excel } from '@/components/excel';
import { Header } from '@/components/header';
import { Formula } from '@/components/formula';
import { Table } from '@/components/table';
import { Toolbar } from '@/components/toolbar';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render()