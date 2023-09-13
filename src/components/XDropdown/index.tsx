import { ReactNode } from 'react'
import { createPortal } from 'react-dom';

interface XDropdownProps {
  children: ReactNode,
}

function XDropdown({ children }: XDropdownProps) {
  return (
    <div style={{ border: '2px solid black' }}>
      {children}
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}

export default XDropdown;