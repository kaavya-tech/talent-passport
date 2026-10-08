import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShieldCheck } from 'lucide-react';
import Badge from './Badge';
import './Navbar.css';

/**
 * Reusable Navbar Component
 * 
 * @param {function} onToggleSidebar - Triggered when mobile hamburger is clicked
 * @param {boolean} isSidebarOpen - Mobile sidebar state
 */
export function Navbar({
  onToggleSidebar,
  isSidebarOpen = false,
  className = '',
}) {
  return (
    <header className={`tp-navbar ${className}`}>
      <div className="tp-navbar__left">
        <button
          type="button"
          className="tp-navbar__toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          aria-expanded={isSidebarOpen}
        >
          <Menu size={20} />
        </button>

        <Link to="/dashboard" className="tp-navbar__brand">
          <div className="tp-navbar__logo-icon">
            <span>TP</span>
          </div>
          <div className="tp-navbar__brand-text">
            <span className="tp-navbar__brand-name">Talent Passport</span>
            <span className="tp-navbar__brand-tagline">Verified Candidate Platform</span>
          </div>
        </Link>
      </div>

      <div className="tp-navbar__right">
        <Badge variant="sage" size="md" dot>
          Phase 1: Foundation
        </Badge>

        <div className="tp-navbar__profile">
          <div className="tp-navbar__avatar">AM</div>
          <div className="tp-navbar__user-info">
            <span className="tp-navbar__user-name">Alex Morgan</span>
            <span className="tp-navbar__user-role">Candidate</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
