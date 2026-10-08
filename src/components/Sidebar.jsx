import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Upload,
  FileEdit,
  Eye,
  LogIn,
  UserPlus,
  X,
  FileText
} from 'lucide-react';
import './Sidebar.css';

const mainNavigation = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Candidate Profile', path: '/profile', icon: User },
];

const resumeNavigation = [
  { name: 'Upload Resume', path: '/resume/upload', icon: Upload },
  { name: 'Edit Resume', path: '/resume/edit', icon: FileEdit },
  { name: 'Preview Resume', path: '/resume/preview', icon: Eye },
];

const authNavigation = [
  { name: 'Candidate Login', path: '/login', icon: LogIn },
  { name: 'Register Account', path: '/register', icon: UserPlus },
];

/**
 * Reusable Sidebar Component
 * 
 * @param {boolean} isOpen - Mobile open state
 * @param {function} onClose - Closes the mobile sidebar drawer
 */
export function Sidebar({ isOpen = false, onClose = () => {} }) {
  const handleNavClick = () => {
    // Automatically close on mobile after link selection
    if (window.innerWidth <= 900) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`tp-sidebar-backdrop ${isOpen ? 'tp-sidebar-backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`tp-sidebar ${isOpen ? 'tp-sidebar--open' : ''}`}>
        <div className="tp-sidebar__mobile-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'var(--color-dark-sage)',
              color: 'var(--color-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>TP</div>
            <strong style={{ fontSize: '14px', color: 'var(--color-text-primary)' }}>Talent Passport</strong>
          </div>
          <button
            type="button"
            className="tp-sidebar__close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="tp-sidebar__section">
          <span className="tp-sidebar__section-title">Navigation</span>
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `tp-sidebar__nav-item ${isActive ? 'tp-sidebar__nav-item--active' : ''}`
                }
              >
                <span className="tp-sidebar__icon"><Icon size={18} /></span>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="tp-sidebar__divider" />

        <div className="tp-sidebar__section">
          <span className="tp-sidebar__section-title">Standardized Resume</span>
          {resumeNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `tp-sidebar__nav-item ${isActive ? 'tp-sidebar__nav-item--active' : ''}`
                }
              >
                <span className="tp-sidebar__icon"><Icon size={18} /></span>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="tp-sidebar__footer">
          <span className="tp-sidebar__section-title">Account Access</span>
          {authNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `tp-sidebar__nav-item ${isActive ? 'tp-sidebar__nav-item--active' : ''}`
                }
              >
                <span className="tp-sidebar__icon"><Icon size={18} /></span>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
