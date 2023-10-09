import React, { useState } from 'react';

const PopupModal = ({ isOpen, setIsOpen, onSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={()=>setIsOpen(!isOpen)}>
          &times;
        </span>
        <h2>Label Model</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Label Input</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
