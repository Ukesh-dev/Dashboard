import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { Si3M } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContextSelector } from '../context/ContextProvider';
import { useScreenSize } from '../hooks/useScreenSize';

const Sidebar = () => {
  const activeMenu = useStateContextSelector((ctx) => ctx.activeMenu);
  const setActiveMenu = useStateContextSelector((ctx) => ctx.toggleSidebar);
  const { screenSize } = useScreenSize();

  const activeLinke =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-400 text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto'>
      {activeMenu && (
        <>
          <div className='flex items-center justify-between'>
            <Link
              to='/'
              onClick={() => {}}
              className='ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white'
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => {
                  setActiveMenu();
                }}
                className='mt-4 block rounded-full p-3 text-xl hover:bg-light-gray md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div>
            {links.map((link) => {
              return (
                <div key={link.title}>
                  <p className='m-3 mt-4 uppercase text-gray-400'>
                    {link.title}
                  </p>
                  {link.links.map((navlink) => (
                    <NavLink
                      to={`${navlink.to || navlink.name}`}
                      key={navlink.name}
                      end
                      onClick={() => {
                        if (screenSize <= 900) {
                          setActiveMenu();
                        }
                      }}
                      className={({ isActive }) =>
                        isActive ? activeLinke : normalLink
                      }
                    >
                      {navlink.icon}
                      <span className='capitalize'>{navlink.name}</span>
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
