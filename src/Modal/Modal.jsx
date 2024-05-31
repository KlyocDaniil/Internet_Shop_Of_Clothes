
import React from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './styledModal.js';

const Modal = ({ onClose, children }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;