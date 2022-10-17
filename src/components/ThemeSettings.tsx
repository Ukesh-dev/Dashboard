import { MdInfoOutline } from 'react-icons/md';

const ThemeSettings = () => {
  return (
    <div className='nav-item fixed top-0 right-0 w-screen bg-half-transparent'>
      <div className='dark:[#484852] float-right h-screen w-400 bg-white dark:text-gray-200'>
        <div className='ml-4 flex items-center justify-between p-4'>
          <p className='text-lg font-semibold'>Settings</p>
          <button
            type='button'
            onClick={() => {}}
            style={{ color: 'rgb(153, 171, 180' }}
          >
            <MdInfoOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
