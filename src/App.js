// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App  

// // App.js
// import React, { useState } from 'react';
// import FormGenerator from './FormGenerator';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState([]);

//   const handleFormSubmit = (data) => {
//     console.log('Form Data:', data);
//   };

//   return (
//     <div className="App">
//       <h1>Dynamic Form Generator</h1>
//       <FormGenerator formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import FormGenerator from './FormGenerator';
import './App.css'; // Add your CSS file
import Label from './Label';

function App() {
  const [formData, setFormData] = useState([]);
  const [formConfig, setFormConfig] = useState({});
  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState(false);
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");

  const addFormField = (fieldType) => {
    setFormData([...formData, { type: fieldType, id: Date.now() }]);
  };

  const removeFormField = (id) => {
    setFormData(formData.filter((field) => field.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormConfig({ ...formConfig, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormConfig({ ...formConfig, [name]: value });

    // Additional logic for conditional rendering could go here
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    // Validation rules (Add more as needed)
    formData.forEach((field) => {
      if (field.type === 'text' || field.type === 'textarea') {
        if (!formConfig[field.type]) {
          isValid = false;
          newErrors[field.type] = 'This field is required.';
        }
      }
    });

    if (isValid) {
      setErrors({});
      alert('Form submitted successfully!');
      // Add logic to save form configuration as JSON
    } else {
      setErrors(newErrors);
    }
  };

  const onSubmit = (data) => {
    setLabel(data);
    addFormField(type);

  };

  return (
    <div className="App">
      {popup && <Label onSubmit={onSubmit} isOpen={true} setIsOpen={setPopup} />}
      <h1>Dynamic Form Generator</h1>
      <button onClick={() => {
        setPopup(!popup)
        setType('text')
        
        }}>Add Text Field</button>
      {/* <button onClick={() => Label}>Add Text Field</button> */}
      <button onClick={() => {
        setPopup(!popup)
        setType('textarea')
        
      }}>Add Text Area</button>
      <button onClick={() => {
          setPopup(!popup)
          setType('dropdown')
    
      }}>Add Dropdown</button>
      <button onClick={() => {
        setPopup(!popup)
        setType('checkbox')
        }}>Add Checkbox</button>
      <button onClick={() => {
        setPopup(!popup)
        setType('radio')
      }}>Add Radio Button</button>
      
      <FormGenerator
        formData={formData}
        removeField={removeFormField}
        handleInputChange={handleInputChange}
        handleDropdownChange={handleDropdownChange}
        formConfig={formConfig}
        label = {label}
        errors={errors}
      />

      <button onClick={handleFormSubmit}>Submit Form</button>
    </div>
  );
}

export default App;







