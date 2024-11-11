import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // const location = useLocation();
  // const [pageTitle, setPageTitle] = useState('');

  

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case '/':
  //       setPageTitle('Home');
  //       break;
  //     case '/about':
  //       setPageTitle('About');
  //       break;
  //     case '/gallery':
  //       setPageTitle('Gallery');
  //       break;
  //     default:
  //       setPageTitle('Page');
  //   }
  // }, [location.pathname]);

  return (
    <div className="relative overflow-hidden w-full h-[100vh]">
      {/* Overlay Masuk */}
      <motion.div
        className="fixed inset-0 bg-gray-800 origin-bottom z-[99999999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Konten Halaman */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>

      {/* Overlay Keluar */}
      <motion.div
        className="fixed inset-0 bg-gray-800 origin-top z-[99999999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
};

export default PageTransition;
