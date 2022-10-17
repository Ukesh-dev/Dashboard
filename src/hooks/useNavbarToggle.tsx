import { useState, useCallback, useMemo } from 'react';
import { NavbarItemTypes } from '../types/navbarItems';

export const useNavbarToggle = () => {
  const navbarItems = useMemo(
    () => ({
      chat: false,
      cart: false,
      profile: false,
      notification: false,
    }),
    []
  );
  const [isClicked, setIsClicked] = useState(navbarItems);

  const showNavbarItems = useCallback(
    (item: NavbarItemTypes) => {
      setIsClicked({ ...navbarItems, [item]: true });
    },
    [navbarItems]
  );

  return { isClicked, showNavbarItems };
};
