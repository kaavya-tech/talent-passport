import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * 
 * @param {string} variant - 'primary' | 'dark' | 'secondary' | 'outline' | 'ghost' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} fullWidth - spans 100% width
 * @param {React.ReactNode} icon - optional leading or trailing icon
 * @param {'left'|'right'} iconPosition - position of icon
 * @param {boolean} disabled - disabled state
 * @param {string} type - 'button' | 'submit' | 'reset'
 * @param {function} onClick - click handler
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'tp-button',
    `tp-button--${variant}`,
    `tp-button--${size}`,
    fullWidth ? 'tp-button--full' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="tp-button__icon">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="tp-button__icon">{icon}</span>
      )}
    </button>
  );
}

export default Button;
