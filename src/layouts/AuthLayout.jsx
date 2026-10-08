import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AuthLayout.css';

/**
 * Clean AuthLayout for Login and Registration
 */
export function AuthLayout() {
  return (
    <div className="tp-auth-layout">
      <header className="tp-auth-layout__header">
        <Link to="/dashboard" className="tp-auth-layout__brand">
          <div className="tp-auth-layout__logo">TP</div>
          <span className="tp-auth-layout__brand-title">Talent Passport</span>
        </Link>
        <Link to="/dashboard" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-dark-sage)' }}>
          ← Back to Dashboard
        </Link>
      </header>

      <main className="tp-auth-layout__main">
        <div className="tp-auth-layout__card">
          <Outlet />
        </div>
      </main>

      <footer className="tp-auth-layout__footer">
        Talent Passport &copy; {new Date().getFullYear()} &bull; Professional Candidate Verification Platform
      </footer>
    </div>
  );
}

export default AuthLayout;
