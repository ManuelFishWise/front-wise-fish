import { ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Accordion.css";

interface AccordionProps {
  panels: { title: string; content: ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ panels }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {panels.map((panel, index) => (
        <div key={index} className="accordion-panel">
          <div
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => togglePanel(index)}
          >
            <div>{panel.title}</div>
            <div>{activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}</div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{panel.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
