import { createPortal } from "react-dom";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 pb-0">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      {/* Contenido del Modal */}
      <div className="relative w-full max-w-md bg-background border border-border-subtle rounded-t-[32px] sm:rounded-[24px] p-8 shadow-2xl animate-slide-up">
        {children}
      </div>
    </div>,
    document.getElementById("root")!
  );
}
