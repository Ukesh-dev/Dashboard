import { useRef, useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BiCart } from 'react-icons/bi';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import {
  useStateContext,
  useStateContextSelector,
} from '../context/ContextProvider';
import NavButton from './NavButton';
import { useScreenSize } from '../hooks/useScreenSize';

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, toggleSidebar } =
    useStateContextSelector((ctx) => ({
      activeMenu: ctx.activeMenu,
      setActiveMenu: ctx.setActiveMenu,
      toggleSidebar: ctx.toggleSidebar,
      isClicked: ctx.isClicked,
    }));
  const { showNavbarItems: handleClick } = useStateContext();

  const { screenSize } = useScreenSize();

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className='md:max-6 relative flex justify-between p-2'>
      <NavButton
        title='Menu'
        customFunc={() => toggleSidebar()}
        color='blue'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          dotColor='#03c9D7'
          color='blue'
          icon={<BiCart />}
          customFunc={() => handleClick('cart')}
        />
        <NavButton
          title='Chat'
          dotColor='#03c9D7'
          color='blue'
          icon={<BsChatLeft />}
          customFunc={() => handleClick('chat')}
        />
        <NavButton
          title='Notification'
          dotColor='#03c9D7'
          color='blue'
          icon={<RiNotification3Line />}
          customFunc={() => handleClick('notification')}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            role='button'
            tabIndex={0}
            className='flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray'
            onClick={() => handleClick('profile')}
            onKeyPress={() => handleClick('profile')}
          >
            <img className='h-8 w-8 rounded-full' src={avatar} alt='Profile' />
            <p className='text-14 text-gray-400'>
              Hi,{' '}
              <span className='ml-1 text-14 font-bold text-gray-400'>
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className='text-14 text-gray-400' />
          </div>
        </TooltipComponent>
      </div>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.profile && <UserProfile />}
    </div>
  );
};

export default Navbar;
