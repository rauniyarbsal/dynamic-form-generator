import React, { useState } from 'react';

function FormField({
  type,
  id,
  handleInputChange,
  handleDropdownChange,
  formConfig,
  label,
  errors,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleInputChange({
      target: { name: `checkbox_${id}`, value: !isChecked, type: 'checkbox' },
    });
  };

  const handleRadioChange = () => {
    handleInputChange({
      target: { name: `radio_${id}`, value: true, type: 'radio' },
    });
  };

  const renderField = () => {
    switch (type) {
      case 'text':
        return (
          <div>
            <label>
              {label}
              <input
                type="text"
                name={`textInput_${id}`}
                onChange={handleInputChange}
              />
              {errors[`textInput_${id}`] && (
                <div className="error">{errors[`textInput_${id}`]}</div>
              )}
            </label>
          </div>
        );
      case 'textarea':
        return (
          <div>
            <label>
              {label}
              <textarea
                name={`textarea_${id}`}
                onChange={handleInputChange}
              ></textarea>
              {errors[`textarea_${id}`] && (
                <div className="error">{errors[`textarea_${id}`]}</div>
              )}
            </label>
          </div>
        );
      case 'dropdown':
        return (
          <div>
            <label>
              {label}
              <select
                name={`dropdown_${id}`}
                onChange={handleDropdownChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              {errors[`dropdown_${id}`] && (
                <div className="error">{errors[`dropdown_${id}`]}</div>
              )}
            </label>
          </div>
        );
      case 'checkbox':
        return (
          <div>
            <label>
              <input
                type="checkbox"
                name={`checkbox_${id}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              {label}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div>
            <label>
              <input
                type="radio"
                name={`radio_${id}`}
                checked={formConfig[`radio_${id}`] || false}
                onChange={handleRadioChange}
              />
              {label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderField()}</div>;
}

export default FormField;
