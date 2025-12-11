import { PhoneIcon } from '@heroicons/react/24/solid';

// Definindo o contrato do componente WhatssappButton (o que ele espera recever)
interface WhatsappButtonFloatingProps {
    whatsappNumeroFloating:string;
}

const WhatsappButtonFloating: React.FC<WhatsappButtonFloatingProps> = ({whatsappNumeroFloating}) => {
    // Funçã para gerar o link do whatsapp
    const whatsappLink = `https://wa.me/${whatsappNumeroFloating}`;
    return (
        // 1. Container principal para o Posicionamento Fixo
        <div className="fixed bottom-10 right-10 z-50">
            {/* 2. Camada de Efeito de Pulso (Ping) */}
            <span className="absolute inset-0 inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            
            {/* 3. O Botão Real (Camada Interna, mantendo o posicionamento e o ícone) */}
            <a 
                href={whatsappLink}
                target="blank"
                rel="noopener noreferrer"
                className="relative inline-flex bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transtion duration-300 transform hover:scale-110"
                aria-label="Fale conosco no WhatsApp"
            >
                {/* Icone simples do whatsapp */}
                <PhoneIcon className="w-12 h-12" />
            </a>
        </div>
    );

}
export default WhatsappButtonFloating;