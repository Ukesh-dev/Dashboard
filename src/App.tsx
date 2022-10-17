import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar } from './components';
import { Ecommerce } from './views';
import styles from './styles';

import './App.css';
import { routes } from './data/routes';
import { useStateContextSelector } from './context/ContextProvider';
// import { useStateContextSelector } from './context/ContextProvider';
function App() {
  const activeMenu = useStateContextSelector((ctx) => ctx.activeMenu);

  return (
    <div>
      <BrowserRouter>
        <div className='relative flex'>
          <div className='fixed right-4 bottom-4 ' style={{ zIndex: '100' }}>
            <TooltipComponent content='Settings' position='TopCenter'>
              <button
                type='button'
                className=' text-3xl hover:bg-light-gray hover:drop-shadow-xl'
              >
                <FiSettings size={20} />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${
              activeMenu ? 'md:ml-72' : ''
            }`}
          >
            <div className='navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static'>
              <Navbar />
            </div>
            {/* //*this is for practice */}
            {/* <div className={styles.exchangeBoxWrapper}>
              <div className={styles.exchangeBox}>
                <div className='pink_gradient' />
                <div className={styles.exchange} />
                <div className='blue_gradient' />
              </div>
            </div> */}

            <div>
              <Routes>
                {routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<route.component />}
                    />
                  );
                })}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
