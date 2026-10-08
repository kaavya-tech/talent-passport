import React from 'react';
import './ProgressBar.css';

/**
 * Reusable ProgressBar Component
 * 
 * @param {number} value - Current value (e.g., 65)
 * @param {number} max - Maximum value (default: 100)
 * @param {string} label - Optional label above progress bar
 * @param {boolean} showValue - Show numeric percentage
 * @param {'sm'|'md'} size - Height sizing
 * @param {'primary'|'dark'|'success'} variant - Fill color tone
 */
export function ProgressBar({
  value = 0,
  max = 100,
  label = '',
  showValue = true,
  size = 'md',
  variant = 'dark',
  className = '',
  ...props
}) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  return (
    <div
      className={`tp-progress ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      {(label || showValue) && (
        <div className="tp-progress__header">
          {label && <span className="tp-progress__label">{label}</span>}
          {showValue && <span className="tp-progress__percentage">{percentage}%</span>}
        </div>
      )}

      <div className={`tp-progress__track tp-progress__track--${size}`}>
        <div
          className={`tp-progress__fill tp-progress__fill--${variant}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
