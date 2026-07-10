import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // useLocation gives us the current route 
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, instantly scroll to the top left
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};