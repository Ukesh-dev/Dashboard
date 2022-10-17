import { useState, useCallback } from 'react';

export const useSidebarToggle = (defaultValue = true) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(defaultValue);

  const toggleSidebar = useCallback(
    () => setActiveMenu(!activeMenu),
    [activeMenu]
  );

  //   const hideSidebar = useCallback(() => setActiveMenu(false), []);

  return { activeMenu, setActiveMenu, toggleSidebar };
};
