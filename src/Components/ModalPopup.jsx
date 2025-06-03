import React, { useState, useEffect } from "react";
// import "../assets/Css/Modalpopup.css;";

const UniqueModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const popupFunction = () => {
    setIsOpen(true);
  };

  return (
    <div className="um-container">
      <button className="um-btn-open" onClick={popupFunction}>
        Open Modal
      </button>

      {isOpen && (
        <div className="um-overlay" onClick={() => setIsOpen(false)}>
          <div
            className={`um-modal ${animate ? "um-show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="um-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2 className="um-title">Custom Modal</h2>
            <p className="um-text">
              This modal has unique class names to avoid style conflicts.
            </p>
            <div className="um-actions">
              <button
                className="um-btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button className="um-btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniqueModal;
