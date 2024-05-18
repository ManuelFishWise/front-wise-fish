// Select.tsx
import React, { useState, useEffect } from "react";
import { Input } from "../";
import { Option } from "./option.interface";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import "./Select.css";

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(option => option.value === defaultValue);
      if (defaultOption) {
        setSelectedOption(defaultOption);
      }
    }
  }, [defaultValue, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchQuery("");
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`custom-select ${isOpen ? "open" : ""}`}>
      <div className="selected-option" onClick={toggleDropdown}>
        <div className="selected-option-placeholder">
          {selectedOption && selectedOption.imageUrl && (
            <img src={selectedOption.imageUrl} alt="Selected option" />
          )}
          <span>
            {selectedOption ? selectedOption.label : "Selecciona una opcion"}
          </span>
        </div>
        <span className="arrow">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isOpen && (
        <div className="options">
          <div className="search-container">
            <Input
              icon={FaSearch}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              handleChange={(e: any) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="options-result">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                {option.imageUrl && <img src={option.imageUrl} alt={option.label} />}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;