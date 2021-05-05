import React from 'react';
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Register Transaction</h2>
    </Modal>
  );
}
