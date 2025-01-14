import React from 'react';
import './FormModal.css';

function FormModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Fill in your details</h2>
        <form>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone Number:
              <input type="tel" name="phone" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Product Name:
              <input type="text" name="product" required />
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
