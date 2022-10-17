import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Inject,
  Sort,
  Page,
  Filter,
  ContextMenu,
  PdfExport,
  ExcelExport,
  Edit,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='m-2 mt-14 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Page,
            Filter,
            ContextMenu,
            PdfExport,
            ExcelExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
