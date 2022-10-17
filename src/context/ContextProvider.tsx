import { SetStateAction, useMemo } from 'react';
import { useNavbarToggle } from '../hooks/useNavbarToggle';
import { useSidebarToggle } from '../hooks/useSidebar';
import { NavbarItemTypes } from '../types/navbarItems';
import { contextFactory } from './helpers/contextFactory';

type InitialStateType = {
  activeMenu: boolean;
  isClicked: {
    chat: boolean;
    cart: boolean;
    profile: boolean;
    notification: boolean;
  };
  toggleSidebar: () => void;
  setActiveMenu: React.Dispatch<SetStateAction<boolean>>;
  showNavbarItems: (item: NavbarItemTypes) => void;
};

const [StateContext, useStateContext, useStateContextSelector] =
  contextFactory<InitialStateType>();

export { useStateContext, useStateContextSelector };

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const { activeMenu, setActiveMenu, toggleSidebar } = useSidebarToggle();
  const { isClicked, showNavbarItems } = useNavbarToggle();

  const values = useMemo(
    () => ({
      activeMenu,
      setActiveMenu,
      toggleSidebar,
      isClicked,
      showNavbarItems,
    }),
    [activeMenu, isClicked]
  );

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};
