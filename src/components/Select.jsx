import React from 'react';
import './Select.css';

/**
 * Reusable Select Dropdown Component
 * 
 * @param {string} label - Field label
 * @param {Array<{value: string|number, label: string}>} options - Selectable options
 * @param {string} placeholder - Empty placeholder text
 * @param {string} error - Validation error text
 * @param {string} helperText - Descriptive helper text
 * @param {boolean} required - Displays required indicator
 */
export function Select({
  label,
  id,
  name,
  value,
  options = [],
  placeholder = 'Select an option...',
  error,
  helperText,
  disabled = false,
  required = false,
  onChange,
  className = '',
  ...props
}) {
  const selectId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`tp-select-group ${className}`}>
      {label && (
        <label htmlFor={selectId} className="tp-select-label">
          {label}
          {required && <span className="tp-select-required">*</span>}
        </label>
      )}

      <div className="tp-select-wrapper">
        <select
          id={selectId}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={onChange}
          className={`tp-select ${error ? 'tp-select--error' : ''}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden={Boolean(value)}>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <span className="tp-select-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>

      {error ? (
        <span className="tp-select-error-text">{error}</span>
      ) : helperText ? (
        <span className="tp-select-helper">{helperText}</span>
      ) : null}
    </div>
  );
}

export default Select;
