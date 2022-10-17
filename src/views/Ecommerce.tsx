import { GoPrimitiveDot } from 'react-icons/go';
import { Button, SparkLine, Stacked } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center lg:flex-nowrap'>
        <div className='m-3 h-44 w-full rounded-xl  bg-white bg-hero-pattern bg-cover bg-[74%_top] bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80'>
          <div>
            <p className='font-bold text-gray-400'>Earnings</p>
            <p className='text-2xl'>$63,448.40</p>
          </div>
          <div className='mt-6'>
            <Button
              text='Download'
              bgColor='blue'
              borderRadius='10px'
              color='white'
              size='md'
            />
          </div>
        </div>
        <div className='m-3 flex flex-wrap items-center justify-center gap-1'>
          {earningData.map((item) => {
            return (
              <div
                key={item.title}
                className='rounded-2xl bg-white p-4 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56'
              >
                <button
                  type='button'
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className='opacity-0.9 rounded-full p-4 text-2xl hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`ml-2 text-sm text-${item.pcColor} `}>
                    {item.percentage}
                  </span>
                </p>
                <p className='mt-1 text-sm text-gray-400'>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='m-2 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expenses</span>
              </p>
              <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap justify-center gap-10'>
            <div className='m-4 border-r-1 border-color pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,493</span>
                  <span className='hover:drop-shaodw-xl ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white'>
                    23%
                  </span>
                </p>
                <p className='mt-1 text-gray-500'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,000</span>
                </p>
                <p className='mt-1 text-gray-500'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor='blue'
                  text='Download Report'
                  borderRadius='10px'
                  size='10px'
                />
              </div>
            </div>
            <Stacked width='320px' height='360px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
