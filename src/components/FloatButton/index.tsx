import { Plus } from "lucide-react"; // Importa el icono de "+" de Lucide

interface IFloatButton {
  onClick: () => void;
  label?: string; // Opcional para accesibilidad
}

export function FloatButton({ onClick, label = "Agregar" }: IFloatButton) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="
        fixed bottom-36 right-8 // Fijo en la esquina inferior derecha
        p-4                    // Padding generoso
        bg-fab-blue             // Usa el color primario de tu tema
        text-background // Color del icono (blanco o claro)
        rounded-full           // Completamente redondo
        shadow-lg              // Sombra sutil para darle profundidad
        flex items-center justify-center // Para centrar el
        transition-all duration-300 // Transiciones suaves
        hover:scale-105 hover:shadow-xl // Efecto al pasar el ratón
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 // Foco accesible
        z-50                   // Asegura que esté por encima de todo
      "
    >
      <Plus className="h-6 w-6" />
    </button>
  );
}
