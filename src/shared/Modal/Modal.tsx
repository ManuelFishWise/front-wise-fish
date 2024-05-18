import { FaTimes } from "react-icons/fa";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import "./Modal.css";

interface ModalProps {
  icon: IconType;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  icon: Icon,
  title,
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-avatar">
            {Icon && <Icon className="icon" />}
          </div>
          <span className="modal-header-title">{title}</span>
          <div className="modal-header-close">
            <FaTimes onClick={onClose}></FaTimes>
          </div>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
