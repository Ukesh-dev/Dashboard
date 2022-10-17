import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Page,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { employeesData, employeesGrid, ordersGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className='m-2 mt-14 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
