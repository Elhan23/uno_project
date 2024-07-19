import React from 'react';
import './ModalComponents.scss';

function ModalComponents({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Характеристики</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="characteristic">
            <span>Способ установки</span><span>Способ установки</span>
          </div>
          <div className="characteristic">
            <span>Напряжение</span><span>Напряжение</span>
          </div>
          <div className="characteristic">
            <span>Цвет</span><span>Цвет</span>
          </div>
          <div className="characteristic">
            <span>Материал</span><span>Материал</span>
          </div>
          <div className="characteristic">
            <span>Управление</span><span>Управление</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponents;
