import IRoute from '../types/route';
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from '../views';

export const routes: IRoute[] = [
  // ? Pages
  {
    component: Calendar,
    path: 'calendar',
  },
  {
    component: ColorPicker,
    path: 'color-picker',
  },
  {
    component: Customers,
    path: 'customers',
  },
  {
    component: Ecommerce,
    path: '/',
  },
  {
    component: Editor,
    path: 'editor',
  },
  {
    component: Employees,
    path: 'employees',
  },
  {
    component: Kanban,
    path: 'kanban',
  },
  {
    component: Orders,
    path: 'orders',
  },

  //* Pages/Charts
  {
    component: Area,
    path: 'area',
  },
  {
    component: Bar,
    path: 'bar',
  },
  {
    component: ColorMapping,
    path: 'colormapping',
  },
  {
    component: Financial,
    path: 'financial',
  },
  {
    component: Line,
    path: 'line',
  },
  {
    component: Pie,
    path: 'pie',
  },
  {
    component: Stacked,
    path: 'stacked',
  },
  {
    component: Pyramid,
    path: 'pyramid',
  },
];
