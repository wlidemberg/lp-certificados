import { motion } from 'framer-motion';

// 1. Definição da Interface (Contrato/Encapsulamento)
interface HeroSectionProps {
  titulo: string;
  subTitulo: string;
  ctaLabel: string; // Call To Action Label (Texto do Botão)
}

// 2. Componente Funcional com classes Tailwind
const HeroSection: React.FC<HeroSectionProps> = ({ titulo, subTitulo, ctaLabel }) => {
  // Configuração da Animação (Framer Motion Variants)
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5, // Delay para começar aparecer
        
       }
    },
  }

  return (
    <section className="text-center py-32 bg-hero-bg bg-cover bg-center relative" style={{height: '768px'}}>
      {/* Adiciona um overlay escuro para o texto se destacar */}
      <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
      {/* motion.div */}
      
      <motion.div 
          className="container flex flex-col mx-auto px-4 relative z-10 text-white items-center justify-center h-full" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          {titulo}
        </h1>
        <p className="text-xl text-white mb-8">
          {subTitulo}
        </p>
        <button className="max-w-[320px] mx-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
          {ctaLabel}
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;