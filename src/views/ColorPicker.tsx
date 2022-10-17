import type { EmitType } from '@syncfusion/ej2-base';
import type { ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const ColorPicker = () => {
  const change = (args: ColorPickerEventArgs) => {
    const Previes = document.getElementById('preview') as HTMLDivElement;
    Previes.style.backgroundColor = args.currentValue.hex;
  };
  return (
    <div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='App' title='Color Picker' />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex flex-wrap items-center justify-center gap-20'>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Pallete</p>
            <ColorPickerComponent
              id='Inline Palette'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Pallete</p>
            <ColorPickerComponent
              id='Inline Palette'
              mode='Picker'
              modeSwitcher={false}
              inline
              change={change}
              showButtons={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
