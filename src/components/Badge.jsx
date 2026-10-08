import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * 
 * @param {string} variant - 'sage' | 'dark' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
 * @param {string} size - 'sm' | 'md'
 * @param {boolean} dot - Shows a status dot prefix
 * @param {React.ReactNode} icon - Optional icon
 */
export function Badge({
  children,
  variant = 'sage',
  size = 'md',
  dot = false,
  icon = null,
  className = '',
  ...props
}) {
  return (
    <span
      className={`tp-badge tp-badge--${variant} tp-badge--${size} ${className}`}
      {...props}
    >
      {dot && <span className="tp-badge__dot" aria-hidden="true" />}
      {icon && <span className="tp-badge__icon">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
