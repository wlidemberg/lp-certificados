// src/components/HeroSection.tsx

// 1. Definição da Interface (Contrato/Encapsulamento)
interface HeroSectionProps {
  titulo: string;
  subTitulo: string;
  ctaLabel: string; // Call To Action Label (Texto do Botão)
}

// 2. Componente Funcional com classes Tailwind
const HeroSection: React.FC<HeroSectionProps> = ({ titulo, subTitulo, ctaLabel }) => {
  return (
    <section className="text-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          {titulo}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {subTitulo}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
          {ctaLabel}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;