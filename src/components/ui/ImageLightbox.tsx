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
  useEffect(() => {
    if (open) {
      // Desabilita scroll quando modal abre
      document.body.style.overflow = "hidden";
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      
      document.addEventListener("keydown", handleEscape);
      
      return () => {
        // Sempre restaura o scroll quando componente desmonta ou modal fecha
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      // Garante que o scroll seja restaurado quando modal fecha
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  if (!open) return null;

  const node = (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Fechar"
        className="absolute top-4 right-4 z-10 rounded-full bg-white text-black p-3 shadow-lg hover:bg-gray-100 transition-colors"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl animate-scale-in"
          onClick={(e) => e.stopPropagation()}
          onError={(e) => {
            console.error('[ImageLightbox] Erro ao carregar imagem:', src);
          }}
          onLoad={() => {
            console.log('[ImageLightbox] Imagem carregada:', src);
          }}
        />
      </div>
    </div>
  );

  return typeof window !== "undefined" ? createPortal(node, document.body) : null;
}