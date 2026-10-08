import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './AppLayout.css';

/**
 * Shared Application Layout
 * Provides top Navbar, responsive collapsible Sidebar, and main content area.
 */
export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="tp-app-layout">
      <Navbar
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="tp-app-layout__body">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        <main className="tp-app-layout__main">
          <div className="tp-app-layout__container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
