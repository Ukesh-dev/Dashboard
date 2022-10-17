import {} from '@syncfusion/ej2-react-charts';
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className='m-2 mt-14 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={['Delete']}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Edit, Selection, Filter, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
