import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * 
 * @param {string} title - Card header title
 * @param {string} subtitle - Optional description under title
 * @param {React.ReactNode} action - Slot for button/badge on top right
 * @param {React.ReactNode} footer - Slot for card bottom action row
 * @param {'none'|'sm'|'md'|'lg'} padding - Internal padding for card body
 * @param {boolean} hoverable - Subtle lift/border emphasis on hover
 */
export function Card({
  children,
  title,
  subtitle,
  action,
  footer,
  padding = 'md',
  hoverable = false,
  className = '',
  ...props
}) {
  const hasHeader = Boolean(title || subtitle || action);

  return (
    <div
      className={`tp-card ${hoverable ? 'tp-card--hoverable' : ''} ${className}`}
      {...props}
    >
      {hasHeader && (
        <div className="tp-card__header">
          <div className="tp-card__header-text">
            {title && <h3 className="tp-card__title">{title}</h3>}
            {subtitle && <p className="tp-card__subtitle">{subtitle}</p>}
          </div>
          {action && <div className="tp-card__action">{action}</div>}
        </div>
      )}

      <div className={`tp-card__body tp-card__body--${padding}`}>
        {children}
      </div>

      {footer && <div className="tp-card__footer">{footer}</div>}
    </div>
  );
}

export default Card;
