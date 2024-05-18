import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './Dropdown.css';

interface CustomDropdownProps {
  toggleContent: ReactNode;
  dropdownContent: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-centered' | 'bottom-centered';
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ toggleContent, dropdownContent, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        {toggleContent}
      </div>
      {isOpen && (
        <div className={`dropdown-content ${position} ${isOpen ? 'show' : ''}`}>
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;