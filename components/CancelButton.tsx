// components/CancelButton.js
import React from "react";

interface CancelButtonProps {
  onCancel: () => void; 
}

export default function CancelButton({ onCancel }: CancelButtonProps) {
  return (
    <button type="button" onClick={onCancel}>
      Cancel
    </button>
  );
}
