import React from 'react';
import './Input.css';

/**
 * Reusable Input Component
 * 
 * @param {string} label - Input label
 * @param {string} id - HTML id
 * @param {string} error - Validation error text
 * @param {string} helperText - Descriptive helper text
 * @param {boolean} required - Displays required indicator
 * @param {React.ReactNode} icon - Optional left adornment icon
 */
export function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  icon = null,
  onChange,
  className = '',
  ...props
}) {
  const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`tp-input-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="tp-input-label">
          {label}
          {required && <span className="tp-input-required">*</span>}
        </label>
      )}

      <div className="tp-input-wrapper">
        {icon && <span className="tp-input-icon">{icon}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          className={`tp-input ${icon ? 'tp-input-with-icon' : ''} ${error ? 'tp-input--error' : ''}`}
          {...props}
        />
      </div>

      {error ? (
        <span className="tp-input-error-text">{error}</span>
      ) : helperText ? (
        <span className="tp-input-helper">{helperText}</span>
      ) : null}
    </div>
  );
}

export default Input;
