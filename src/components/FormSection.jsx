import React from 'react';
import './FormSection.css';

/**
 * Reusable FormSection Component
 * 
 * @param {string} title - Section title
 * @param {string} description - Brief instructions or context for the section
 * @param {React.ReactNode} action - Optional action button or badge
 * @param {React.ReactNode} children - Form fields or contents
 */
export function FormSection({
  title,
  description,
  action,
  children,
  className = '',
  ...props
}) {
  return (
    <section className={`tp-form-section ${className}`} {...props}>
      {(title || description || action) && (
        <div className="tp-form-section__header">
          <div className="tp-form-section__title-group">
            {title && <h4 className="tp-form-section__title">{title}</h4>}
            {description && <p className="tp-form-section__description">{description}</p>}
          </div>
          {action && <div className="tp-form-section__action">{action}</div>}
        </div>
      )}

      <div className="tp-form-section__body">
        {children}
      </div>
    </section>
  );
}

export default FormSection;
