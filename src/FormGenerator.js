import React from 'react';
import FormField from './FormField';

function FormGenerator({
  formData,
  removeField,
  handleInputChange,
  handleDropdownChange,
  formConfig,
  label,
  errors,
}) {
  return (
    <form>
      {formData.map((field) => (
        <div key={field.id}>
          <FormField
            type={field.type}
            id={field.id}
            handleInputChange={handleInputChange}
            handleDropdownChange={handleDropdownChange}
            formConfig={formConfig}
            label = {label}
            errors={errors}
          />
          <button type="button" onClick={() => removeField(field.id)}>
            Remove
          </button>
        </div>
      ))}
    </form>
  );
}

export default FormGenerator;
