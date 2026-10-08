import React from 'react';
import './PageHeader.css';

/**
 * Reusable PageHeader Component
 * 
 * @param {string} title - Main page heading
 * @param {string} description - Brief explanatory sentence
 * @param {string} category - Small uppercase section tag
 * @param {React.ReactNode} badge - Optional badge beside category
 * @param {React.ReactNode} actions - Slot for buttons or controls
 */
export function PageHeader({
  title,
  description,
  category,
  badge,
  actions,
  className = '',
}) {
  return (
    <header className={`tp-page-header ${className}`}>
      <div className="tp-page-header__content">
        {(category || badge) && (
          <div className="tp-page-header__meta">
            {category && <span className="tp-page-header__category">{category}</span>}
            {badge}
          </div>
        )}
        <h1 className="tp-page-header__title">{title}</h1>
        {description && (
          <p className="tp-page-header__description">{description}</p>
        )}
      </div>

      {actions && (
        <div className="tp-page-header__actions">
          {actions}
        </div>
      )}
    </header>
  );
}

export default PageHeader;
