import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type ImageLightboxProps = {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ImageLightbox({ open, src, alt, onClose }: ImageLightboxProps) {
  if (!open) return null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const node = (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Fechar"
        className="absolute top-4 right-4 rounded-full bg-card/90 text-foreground p-3 shadow hover:bg-card transition-colors"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl animate-[zoomIn_.18s_ease]"
        onClick={(e) => e.stopPropagation()}
      />

      <style>{`
        @keyframes zoomIn {
          from { transform: scale(.95); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );

  return typeof window !== "undefined" ? createPortal(node, document.body) : null;
}
