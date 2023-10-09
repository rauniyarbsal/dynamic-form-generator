// src/components/Form.js
import React from 'react';
import FormField from './FormField';

const Form = ({ formFields, onAddField, onRemoveField, onFieldChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {formFields.map((field, index) => (
        <FormField
          key={index}
          index={index}
          field={field}
          onFieldChange={onFieldChange}
          onRemoveField={onRemoveField}
        />
      ))}
      <button type="button" onClick={onAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
